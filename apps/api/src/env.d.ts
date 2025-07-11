declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string;
    ALLOWED_ORIGINS: string;
  }
}
