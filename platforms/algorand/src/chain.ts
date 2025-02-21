import type { Network } from "@ultronswap-wormhole/sdk-connect";
import { ChainContext } from "@ultronswap-wormhole/sdk-connect";
import type { AlgorandChains } from "./types.js";

export class AlgorandChain<
  N extends Network = Network,
  C extends AlgorandChains = AlgorandChains,
> extends ChainContext<N, C> {}
