import { HttpRequestProcessor,HttpRequestData } from "types";
import { Injectable, LocalCache, ValidationUtils } from "ferrum-plumbing";
import { CrucibeService } from "./CrucibleService";

export class CrucibleRequestProcessor extends HttpRequestProcessor implements Injectable {
	private cache = new LocalCache();
    constructor(
		private svc: CrucibeService,
    ){
        super()

        this.registerProcessor('getAllocation',
            (req) => this.getAllocation(req));

        this.registerProcessor('depositGetTransaction',
            (req, userId) => this.depositGetTransaction(req, userId!));

        this.registerProcessor('depositPublicGetTransaction',
            (req, userId) => this.depositPublicGetTransaction(req, userId!));

        this.registerProcessor('getCrucible',
            (req) => this.getCrucible(req));

        this.registerProcessor('remainingFromCap',
            (req) => this.remainingFromCap(req));

        this.registerProcessor('withdrawGetTransaction',
            (req, userId) => this.withdrawGetTransaction(req, userId));
    }

    __name__() { return 'CrucibleRequestProcessor'; }
  
    async getAllocation(req: HttpRequestData) {
        const {
            network, crucible, userAddress
        } = req.data;
        ValidationUtils.isTrue(!!network, 'network must be provided');
        ValidationUtils.isTrue(!!crucible, 'crucible must be provided');
        ValidationUtils.isTrue(!!userAddress, 'userAddress must be provided');
        return await this.cache.getAsync(`ALLOC:${network}:${crucible}:${userAddress}`,
			async () => this.svc.getAllocation(network, crucible, userAddress));
    }

    async depositGetTransaction(req: HttpRequestData, userId: string) {
        const {
            network, currency, crucible, amount,
        } = req.data;
        ValidationUtils.isTrue(!!userId, 'user must be signed in');
        ValidationUtils.isTrue(!!network, 'network must be provided');
        ValidationUtils.isTrue(!!currency, 'currency must be provided');
        ValidationUtils.isTrue(!!crucible, 'crucible must be provided');
        ValidationUtils.isTrue(!!amount, 'amount must be provided');
        return this.svc.depositGetTransaction(network, currency, crucible, amount, userId);
    }

    async depositPublicGetTransaction(req: HttpRequestData, userId: string) {
        const {
            network, currency, crucible, amount,
        } = req.data;
        ValidationUtils.isTrue(!!userId, 'user must be signed in');
        ValidationUtils.isTrue(!!network, 'network must be provided');
        ValidationUtils.isTrue(!!currency, 'currency must be provided');
        ValidationUtils.isTrue(!!crucible, 'crucible must be provided');
        ValidationUtils.isTrue(!!amount, 'amount must be provided');
        return this.svc.depositPublicGetTransaction(network, currency, crucible, amount, userId);
	}

    async withdrawGetTransaction(req: HttpRequestData, userId: string) {
        const {
            network, currency, crucible, amount,
        } = req.data;
        ValidationUtils.isTrue(!!userId, 'user must be signed in');
        ValidationUtils.isTrue(!!network, 'network must be provided');
        ValidationUtils.isTrue(!!currency, 'currency must be provided');
        ValidationUtils.isTrue(!!crucible, 'crucible must be provided');
        ValidationUtils.isTrue(!!amount, 'amount must be provided');
        return this.svc.withdrawGetTransaction(network, currency, crucible, amount, userId);
	}

    async remainingFromCap(req: HttpRequestData) {
        const {
            network, crucible,
        } = req.data;
        ValidationUtils.isTrue(!!network, 'network must be provided');
        ValidationUtils.isTrue(!!crucible, 'crucible must be provided');
        return this.svc.remainingFromCap(network, crucible);
	}
	
	async getCrucible(req: HttpRequestData) {
        const {
            network, crucible,
        } = req.data;
        ValidationUtils.isTrue(!!network, 'network must be provided');
        ValidationUtils.isTrue(!!crucible, 'crucible must be provided');
        return this.svc.getCrucibleInfo(network, crucible);
	}
}