

export type WalletProvider = 'metamask' | 'walletconnect' | 'coinbase' | 'injected';

export interface WalletAccount {
  address: string;
  
  checksumAddress: string;
  
  ensName: string | null;
  
  chainId: number;
  provider: WalletProvider;
}

export type WalletConnectionState =
  | 'disconnected'
  | 'connecting'
  | 'connected'
  | 'error';

export class Web3Error extends Error {
  constructor(
    message: string,
    public readonly code:
      | 'WALLET_NOT_FOUND'
      | 'USER_REJECTED'
      | 'WRONG_NETWORK'
      | 'TX_FAILED'
      | 'IPFS_ERROR'
      | 'CONTRACT_ERROR'
  ) {
    super(message);
    this.name = 'Web3Error';
  }
}


export interface EngagementPayload {
  contentId: string;
  
  contentCid?: string;
  type: 'like' | 'repost' | 'comment';
  
  actor: string;
  
  timestamp?: string;
  
  txHash?: string;
}

export interface EngagementStats {
  contentId: string;
  likes: number;
  reposts: number;
  comments: number;
  
  verifiedLikes: number;
  
  hasLiked: boolean;
}

export interface IpfsUploadResult {
  
  cid: string;
  
  uri: string;
  
  gatewayUrl: string;
  
  size: number;
}

export interface IpfsContent {
  cid: string;
  
  content: string;
  
  mimeType: string | null;
}

export interface ChainConfig {
  chainId: number;
  name: string;
  rpcUrl: string;
  blockExplorerUrl: string;
  nativeCurrency: { name: string; symbol: string; decimals: number };
  
  engagementContractAddress: string | null;
}

export const SUPPORTED_CHAINS: Record<number, ChainConfig> = {
  1: {
    chainId: 1,
    name: 'Ethereum Mainnet',
    rpcUrl: 'https://mainnet.infura.io/v3/',
    blockExplorerUrl: 'https://etherscan.io',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    engagementContractAddress: null, 
  },
  137: {
    chainId: 137,
    name: 'Polygon',
    rpcUrl: 'https://polygon-rpc.com',
    blockExplorerUrl: 'https://polygonscan.com',
    nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
    engagementContractAddress: null,
  },
  11155111: {
    chainId: 11155111,
    name: 'Sepolia Testnet',
    rpcUrl: 'https://rpc.sepolia.org',
    blockExplorerUrl: 'https://sepolia.etherscan.io',
    nativeCurrency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
    engagementContractAddress: null,
  },
};

export const DEFAULT_CHAIN_ID = 137; 
