import { HexString } from 'ferrum-plumbing';
import Web3 from 'web3';
import { Eth } from 'web3-eth';

export interface Eip712Params {
    contractName: string;
    contractVersion: string;
    method: string;
    args: { type: string, name: string, value: string }[],
    hash?: HexString;
    signature?: HexString;
}

export function domainSeparator(eth: Eth,
        contractName: string,
        contractVersion: string,
        netId: number,
        contractAddress: HexString) {
    const hashedName = Web3.utils.keccak256(Web3.utils.utf8ToHex(contractName));
    const hashedVersion = Web3.utils.keccak256(Web3.utils.utf8ToHex(contractVersion));
    const typeHash = Web3.utils.keccak256(
        Web3.utils.utf8ToHex("EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)"));

    return Web3.utils.keccak256(
        eth.abi.encodeParameters(
            ['bytes32', 'bytes32', 'bytes32', 'uint256', 'address'],
            [typeHash, hashedName, hashedVersion, netId, contractAddress]
        )
    );
}

export function fixSig(sig: HexString) {
    const rs = sig.substring(0, sig.length - 2);
    let v = sig.substring(sig.length - 2);
    if (v === '00' || v ==='37' || v === '25') {
        v = '1b'
        } else if (v === '01' || v === '38' || v === '26') {
        v = '1c'
    }
    return rs+v;
}

export function produceSignature(
        eth: Eth,
        netId: number,
        contractAddress: HexString,
        eipParams: Eip712Params): Eip712Params {
    const methodSig = `${eipParams.method}(${eipParams.args.map(p => `${p.type} ${p.name}`).join(',')})`
    const methodHash = Web3.utils.keccak256(Web3.utils.utf8ToHex(methodSig));
    // const methodHash = Web3.utils.keccak256(
    //     Web3.utils.utf8ToHex('WithdrawSigned(address token, address payee,uint256 amount,bytes32 salt)'));

    // ['bytes32', 'address', 'address', 'uint256', 'bytes32'];
    const params = eipParams.args.map(p => p.type);
    const structure = eth.abi.encodeParameters(params, [methodHash, ...eipParams.args.map(p => p.value)]);
    const structureHash = Web3.utils.keccak256(structure);
    const ds = domainSeparator(eth, eipParams.contractName, eipParams.contractVersion, netId, contractAddress);
    const hash = Web3.utils.soliditySha3("\x19\x01", ds, structureHash) as HexString;
    return {...eipParams, hash, signature: ''};
}

export function randomSalt() {
    return Web3.utils.randomHex(32);
}