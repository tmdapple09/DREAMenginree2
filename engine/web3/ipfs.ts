import { IpfsContent, IpfsUploadResult, Web3Error } from './types';



const IPFS_API_BASE = '/api/social/ipfs';
const PUBLIC_GATEWAY =
  process.env.NEXT_PUBLIC_IPFS_GATEWAY ?? 'https://ipfs.io/ipfs';

function cidToGatewayUrl(cid: string): string {
  return `${PUBLIC_GATEWAY}/${cid}`;
}


export async function uploadToIpfs(content: string): Promise<IpfsUploadResult> {
  const res = await fetch(`${IPFS_API_BASE}/upload`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content }),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Web3Error(
      body?.error ?? `IPFS upload failed (${res.status})`,
      'IPFS_ERROR'
    );
  }

  const data = (await res.json()) as { cid: string; size?: number };
  const cid = data.cid;

  return {
    cid,
    uri: `ipfs://${cid}`,
    gatewayUrl: cidToGatewayUrl(cid),
    size: data.size ?? new TextEncoder().encode(content).length,
  };
}


export async function uploadFileToIpfs(file: File): Promise<IpfsUploadResult> {
  const formData = new FormData();
  formData.append('file', file);

  const res = await fetch(`${IPFS_API_BASE}/upload`, {
    method: 'POST',
    body: formData,
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Web3Error(
      body?.error ?? `IPFS file upload failed (${res.status})`,
      'IPFS_ERROR'
    );
  }

  const data = (await res.json()) as { cid: string; size?: number };
  const cid = data.cid;

  return {
    cid,
    uri: `ipfs://${cid}`,
    gatewayUrl: cidToGatewayUrl(cid),
    size: data.size ?? file.size,
  };
}


export async function getFromIpfs(cid: string): Promise<IpfsContent> {
  
  try {
    const res = await fetch(`${IPFS_API_BASE}/content/${encodeURIComponent(cid)}`);
    if (res.ok) {
      const data = (await res.json()) as { content: string; mimeType?: string };
      return {
        cid,
        content: data.content,
        mimeType: data.mimeType ?? null,
      };
    }
  } catch {
    
  }

  
  const gatewayRes = await fetch(cidToGatewayUrl(cid));
  if (!gatewayRes.ok) {
    throw new Web3Error(
      `Failed to retrieve CID ${cid} from IPFS (${gatewayRes.status})`,
      'IPFS_ERROR'
    );
  }

  const content = await gatewayRes.text();
  const mimeType = gatewayRes.headers.get('content-type')?.split(';')[0] ?? null;

  return { cid, content, mimeType };
}


export async function pinCid(cid: string): Promise<boolean> {
  try {
    const res = await fetch(`${IPFS_API_BASE}/pin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cid }),
    });
    return res.ok;
  } catch {
    return false;
  }
}


export function resolveIpfsUrl(cidOrUri: string): string {
  const cid = cidOrUri.startsWith('ipfs://')
    ? cidOrUri.slice('ipfs://'.length)
    : cidOrUri;
  return cidToGatewayUrl(cid);
}


export function isIpfsCid(value: string): boolean {
  return (
    value.startsWith('ipfs://') ||
    /^Qm[1-9A-HJ-NP-Za-km-z]{44}$/.test(value) || 
    /^baf[a-z2-7]{56}$/.test(value) 
  );
}
