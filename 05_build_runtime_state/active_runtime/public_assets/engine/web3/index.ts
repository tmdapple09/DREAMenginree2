/**
 * lib/web3/index.ts
 *
 * Public surface for DREAMengin's Web3 layer.
 *
 * Import from here instead of from individual sub-modules:
 *
 *   import { web3Client, trackEngagement, uploadToIpfs } from '@/engine/web3';
 */

// Types

// Wallet client

// Engagement

// IPFS

export { DEFAULT_CHAIN_ID, SUPPORTED_CHAINS, Web3Error } from './types';
export type {
    ChainConfig, EngagementPayload,
    EngagementStats, IpfsContent, IpfsUploadResult, WalletAccount,
    WalletConnectionState, WalletProvider
} from './types';
export { Web3Client, web3Client } from './client';
export {
    applyOptimisticEngagement, clearOptimisticDelta, getEngagementStats, getOptimisticDelta, trackEngagement
} from './engagement';
export {
    getFromIpfs, isIpfsCid, pinCid,
    resolveIpfsUrl, uploadFileToIpfs, uploadToIpfs
} from './ipfs';
