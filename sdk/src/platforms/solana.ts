import { applyChainsConfigConfigOverrides } from "@ultronswap-wormhole/sdk-connect";
import * as _solana from "@ultronswap-wormhole/sdk-solana";
import type { PlatformDefinition } from "../index.js";
/** Platform and protocol definitons for Solana */
const solana: PlatformDefinition<typeof _solana._platform> = {
  Address: _solana.SolanaAddress,
  Platform: _solana.SolanaPlatform,
  getSigner: _solana.getSolanaSignAndSendSigner,
  protocols: {
    WormholeCore: () => import("@ultronswap-wormhole/sdk-solana-core"),
    TokenBridge: () => import("@ultronswap-wormhole/sdk-solana-tokenbridge"),
    CircleBridge: () => import("@ultronswap-wormhole/sdk-solana-cctp"),
  },
  getChain: (network, chain, overrides?) =>
    new _solana.SolanaChain(
      chain,
      new _solana.SolanaPlatform(
        network,
        applyChainsConfigConfigOverrides(network, _solana._platform, { [chain]: overrides }),
      ),
    ),
};
export default solana;
