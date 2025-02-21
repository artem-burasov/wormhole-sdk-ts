import { registerProtocol } from "@ultronswap-wormhole/sdk-connect";

import { SuiCircleBridge } from "./circleBridge.js";

registerProtocol("Sui", "CircleBridge", SuiCircleBridge);
export * from "./circleBridge.js";
