import yaml from 'js-yaml';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';

export interface Config {
  name: string;
  title: string;
  description: string;
  site_url: string;
  position: string;
  affiliation: { name: string; url?: string };
  location?: string;
  email: string;
  image: string;
  cv_url: string;
  links: Record<string, string>;
}

// Cached for production builds only, so edits to site.yml show up during `yarn dev`.
let cached: Config | undefined;

export async function getConfig(): Promise<Config> {
  if (cached && import.meta.env.PROD) return cached;
  const configPath = path.resolve(process.cwd(), 'src/config/site.yml');
  const configFile = await fs.readFile(configPath, 'utf8');
  cached = yaml.load(configFile) as Config;
  return cached;
}

/** Display labels for profile links in site.yml. */
export const LINK_LABELS: Record<string, string> = {
  github: 'GitHub',
  linkedin: 'LinkedIn',
  google_scholar: 'Google Scholar',
  orcid: 'ORCID',
  dblp: 'DBLP',
  semantic_scholar: 'Semantic Scholar',
};
