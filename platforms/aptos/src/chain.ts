import type { Network } from "@ultronswap-wormhole/sdk-connect";
import { ChainContext } from "@ultronswap-wormhole/sdk-connect";
import type { AptosChains } from "./types.js";

export class AptosChain<
  N extends Network = Network,
  C extends AptosChains = AptosChains,
> extends ChainContext<N, C> {}
