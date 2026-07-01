import { normaliseGitHub } from '@/engine/connectors/normalise';
import type { UnifiedFeedItem } from '@/types/connector';



const GH_API = 'https://api.github.com';

export interface GitHubCredentials {
  access_token: string;
}

interface GitHubUser {
  login: string;
  name?: string;
}


export async function githubVerify(creds: GitHubCredentials): Promise<string> {
  const res = await fetch(`${GH_API}/user`, {
    headers: {
      Authorization: `Bearer ${creds.access_token}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });
  if (!res.ok) throw new Error(`GitHub verify failed: ${res.status} ${res.statusText}`);
  const user = await res.json() as GitHubUser;
  return user.login;
}


export async function githubSync(creds: GitHubCredentials): Promise<UnifiedFeedItem[]> {
  
  const login = await githubVerify(creds);

  const res = await fetch(`${GH_API}/users/${login}/events?per_page=40`, {
    headers: {
      Authorization: `Bearer ${creds.access_token}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });
  if (!res.ok) throw new Error(`GitHub sync failed: ${res.status} ${res.statusText}`);
  const events = await res.json() as unknown[];
  return (events as Parameters<typeof normaliseGitHub>[0][]).map(normaliseGitHub);
}

export function githubCredentialFields( ){
  return [
    {
      key: 'access_token',
      label: 'Personal Access Token',
      placeholder: 'ghp_xxxxxxxxxxxxxxxxxxxx',
      type: 'password' as const,
      hint: 'Create at github.com → Settings → Developer settings → Personal access tokens. Needs read:user scope.',
    },
  ];
}
