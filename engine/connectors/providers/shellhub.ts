

export const SHELLHUB_DEFAULT_SERVER = 'https://cloud.shellhub.io';
const SHELLHUB_API_BASE = '/api/v1';

export interface ShellHubCredentials {
  server_url: string;
  api_key: string;
}

export interface ShellHubDevice {
  uid: string;
  name: string;
  
  identity: { mac: string };
  
  info: {
    id: string;
    pretty_name: string;
    arch: string;
    version?: string;
  };
  status: 'online' | 'offline' | 'removed' | 'pending' | string;
  online: boolean;
  last_seen: string;
  namespace: string;
}


async function shellhubFetch<T>(
  server_url: string,
  api_key: string,
  path: string,
): Promise<T> {
  let base: URL;
  try {
    base = new URL(server_url.trim());
  } catch {
    throw new Error(`ShellHub: invalid server URL "${server_url}".`);
  }

  if (base.protocol !== 'https:') {
    throw new Error('ShellHub server URL must use HTTPS.');
  }

  
  const url = `${base.origin}${SHELLHUB_API_BASE}${path}`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${api_key}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    
    cache: 'no-store',
  });

  if (res.status === 401 || res.status === 403) {
    throw new Error('ShellHub: invalid or expired API key.');
  }
  if (!res.ok) {
    throw new Error(`ShellHub API error: ${res.status} ${res.statusText}`);
  }

  return res.json() as Promise<T>;
}


export async function shellhubVerify(creds: ShellHubCredentials): Promise<string> {
  const devices = await shellhubFetch<ShellHubDevice[]>(
    creds.server_url,
    creds.api_key,
    '/devices?per_page=1&page=1',
  );
  const count = Array.isArray(devices) ? devices.length : 0;
  return count > 0 ? `Connected — ${count}+ device(s) found` : 'Connected — no devices yet';
}


export async function shellhubListDevices(
  creds: ShellHubCredentials,
): Promise<ShellHubDevice[]> {
  const result = await shellhubFetch<ShellHubDevice[] | { data?: ShellHubDevice[] }>(
    creds.server_url,
    creds.api_key,
    '/devices?per_page=20&page=1',
  );
  
  if (Array.isArray(result)) return result;
  if (typeof result === 'object' && result !== null && Array.isArray((result as { data?: ShellHubDevice[] }).data)) {
    return (result as { data: ShellHubDevice[] }).data;
  }
  return [];
}


export function shellhubCredentialFields( ){
  return [
    {
      key: 'server_url',
      label: 'ShellHub Server URL',
      placeholder: SHELLHUB_DEFAULT_SERVER,
      type: 'url' as const,
      hint: 'Leave as default for ShellHub Cloud, or enter your self-hosted server URL.',
    },
    {
      key: 'api_key',
      label: 'API Key',
      placeholder: 'paste your ShellHub API key here',
      type: 'password' as const,
      hint: 'Create at your ShellHub Dashboard → Settings → API Keys.',
    },
  ] as const;
}
