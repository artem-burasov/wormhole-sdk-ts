import { registerProtocol } from "@ultronswap-wormhole/sdk-connect";
import { _platform } from "@ultronswap-wormhole/sdk-cosmwasm";
import { CosmwasmTokenBridge } from "./tokenBridge.js";

registerProtocol(_platform, "TokenBridge", CosmwasmTokenBridge);

export * from "./tokenBridge.js";
