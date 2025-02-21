import { registerProtocol } from '@ultronswap-wormhole/sdk-connect';
import { _platform } from '@ultronswap-wormhole/sdk-evm';
import { EvmWormholeCore } from './core.js';

registerProtocol(_platform, 'WormholeCore', EvmWormholeCore);

export * as ethers_contracts from './ethers-contracts/index.js';
export * from './core.js';
