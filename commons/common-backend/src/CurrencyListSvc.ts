import { Injectable, LocalCache, Networks } from "ferrum-plumbing";
import { TokenDetails } from "types";
import fetch from 'cross-fetch';

const CURRENCY_LISTS = [
	'https://raw.githubusercontent.com/ferrumnet/ferrum-token-list/main/FerrumTokenList.json',
	'https://tokens.coingecko.com/uniswap/all.json',
];
const DAY = 24 * 3600;

export class CurrencyListSvc implements Injectable {
	private cache = new LocalCache();
	constructor() { }
	__name__() { return 'CurrencyListSvc'; }

	async mergedList(): Promise<TokenDetails[]> {
		return this.cache.getAsync('CURRENCY_LIST', async () => {
			const listFs = CURRENCY_LISTS.map(l => this.loadSingleList(l));
			const listsOfLists = await Promise.all(listFs);
			let lists: TokenDetails[] = [];
			listsOfLists.forEach(list => {
				lists = lists.concat(list);
			});
			lists.forEach(l => {
				try {
					const network = Networks.forChainId(l.chainId).id;
					l.currency = `${network}:${(l.address || '').toLowerCase()}`;
				} catch(e) { } 
			});
			return lists;
		}, DAY);
	}

	private async loadSingleList(url: string): Promise<TokenDetails[]> {
		const res = await fetch(url);
		const resJ = await res.json();
		return resJ.tokens;
	}
}