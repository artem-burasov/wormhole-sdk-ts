import { _platform } from "@ultronswap-wormhole/sdk-sui";
import { registerProtocol } from "@ultronswap-wormhole/sdk-connect";
import { SuiWormholeCore } from "./core.js";

registerProtocol("Sui", "WormholeCore", SuiWormholeCore);

export * from "./core.js";
