import { _platform } from "@ultronswap-wormhole/sdk-sui";
import { registerProtocol } from "@ultronswap-wormhole/sdk-connect";
import { SuiTokenBridge } from "./tokenBridge.js";
import { SuiAutomaticTokenBridge } from "./automaticTokenBridge.js";

registerProtocol("Sui", "TokenBridge", SuiTokenBridge);
registerProtocol("Sui", "AutomaticTokenBridge", SuiAutomaticTokenBridge);

export * from "./tokenBridge.js";
export * from "./automaticTokenBridge.js";
export * from "./utils.js";
