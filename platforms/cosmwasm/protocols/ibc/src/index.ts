import { registerProtocol } from "@ultronswap-wormhole/sdk-connect";
import { _platform } from "@ultronswap-wormhole/sdk-cosmwasm";
import { CosmwasmIbcBridge } from "./ibc.js";

registerProtocol(_platform, "IbcBridge", CosmwasmIbcBridge);

export * from "./ibc.js";
