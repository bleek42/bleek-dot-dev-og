/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly NODE_ENV: 'development' | 'test' | 'production' | null;
  readonly PORT: 3000 | 3001 | number;
  readonly VITE_APP_TITLE: 'bleek-dot-dev';
  readonly VITE_ENV_VAR: unknown;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
