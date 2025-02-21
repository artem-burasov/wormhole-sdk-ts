import type { Network } from "@ultronswap-wormhole/sdk-connect";
import { ChainContext } from "@ultronswap-wormhole/sdk-connect";
import type { SuiChains } from "./types.js";

export class SuiChain<
  N extends Network = Network,
  C extends SuiChains = SuiChains,
> extends ChainContext<N, C> {}
