import { registerProtocol } from "@ultronswap-wormhole/sdk-connect";
import { _platform } from "@ultronswap-wormhole/sdk-cosmwasm";
import { CosmwasmWormholeCore } from "./core.js";

registerProtocol(_platform, "WormholeCore", CosmwasmWormholeCore);

export * from "./core.js";
