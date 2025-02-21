// EXAMPLE_SYNC_IMPORT
import { Wormhole } from "@ultronswap-wormhole/sdk";
import evm from "@ultronswap-wormhole/sdk/platforms/evm";

const wh = new Wormhole("Mainnet", [evm.Platform]);
console.log(wh.config);
// EXAMPLE_SYNC_IMPORT
