import { registerProtocol } from '@ultronswap-wormhole/sdk-connect';
import { _platform } from '@ultronswap-wormhole/sdk-evm';
import { EvmPorticoBridge } from './bridge.js';

registerProtocol(_platform, 'PorticoBridge', EvmPorticoBridge);

export * from './bridge.js';
