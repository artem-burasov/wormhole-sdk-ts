import type { Chain } from "@ultronswap-wormhole/sdk-base";

export class MockRpc {
  constructor(chain: Chain) {}

  getBalance(address: string): Promise<bigint> {
    throw new Error("Method not implemented.");
  }
  broadcastTransaction(stxns: any): any {
    throw new Error("Not implemented");
  }
}
