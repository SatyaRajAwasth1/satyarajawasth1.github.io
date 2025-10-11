import yaml from 'js-yaml';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';

export interface Config {
  name: string;
  title: string;
  description: string;
  email: string;
  image: string;
  nav: Array<{
    title: string;
    link: string;
    order: number;
  }>;
  research_interests: string[];
  research_questions: string[];
  footer: {
    copyright: string;
    social: {
      github: string;
      linkedin: string;
    };
  };
  theme: {
    primary_color: string;
    accent_color: string;
    background_color: string;
    text_color: string;
  };
}

export async function getConfig(): Promise<Config> {
  const configPath = path.resolve(process.cwd(), 'src/config/site.yml');
  const configFile = await fs.readFile(configPath, 'utf8');
  return yaml.load(configFile) as Config;
}