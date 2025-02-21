import { applyChainsConfigConfigOverrides } from "@ultronswap-wormhole/sdk-connect";
import * as _evm from "@ultronswap-wormhole/sdk-evm";
import type { PlatformDefinition } from "../index.js";

/** Platform and protocol definitions for Evm */
const evm: PlatformDefinition<typeof _evm._platform> = {
  Address: _evm.EvmAddress,
  Platform: _evm.EvmPlatform,
  getSigner: _evm.getEvmSigner,
  protocols: {
    WormholeCore: () => import("@ultronswap-wormhole/sdk-evm-core"),
    TokenBridge: () => import("@ultronswap-wormhole/sdk-evm-tokenbridge"),
    PorticoBridge: () => import("@ultronswap-wormhole/sdk-evm-portico"),
    CircleBridge: () => import("@ultronswap-wormhole/sdk-evm-cctp"),
  },
  getChain: (network, chain, overrides?) =>
    new _evm.EvmChain(
      chain,
      new _evm.EvmPlatform(
        network,
        applyChainsConfigConfigOverrides(network, _evm._platform, {
          [chain]: overrides,
        }),
      ),
    ),
};

export default evm;
