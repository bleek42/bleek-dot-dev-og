import { GH_API_TOKEN, HYGRAPH_API_TOKEN, GH_API_URL } from './constants/config';
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly NODE_ENV: 'development' | 'test' | 'production' | null;
  readonly PORT: 3000 | 3001 | number;
  readonly GH_API_TOKEN: '' | null;
  readonly HYGRAPH_API_TOKEN: '' | null;
  readonly GH_API_URL: 'https://api.github.com/users/bleek42'
  readonly VITE_APP_TITLE: 'bleek-dot-dev';
  readonly VITE_ENV_VAR: unknown;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
