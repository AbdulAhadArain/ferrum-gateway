import { Network } from "ferrum-plumbing";

export type ChainEventStatus = '' | 'pending' | 'failed' | 'completed';

export interface ChainEventBase {
    id: string;
    network: Network;
    status: ChainEventStatus;
    eventType: string;
}