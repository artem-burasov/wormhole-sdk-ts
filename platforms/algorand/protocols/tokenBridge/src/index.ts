import { registerProtocol } from "@ultronswap-wormhole/sdk-connect";
import { _platform } from "@ultronswap-wormhole/sdk-algorand";
import { AlgorandTokenBridge } from "./tokenBridge.js";

registerProtocol(_platform, "TokenBridge", AlgorandTokenBridge);

export * from "./tokenBridge.js";
