declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NEXT_PUBLIC_API_URL: string;
    readonly NEXT_PUBLIC_LOCAL_STORAGE_USER_KEY: string;
    readonly NEXT_PUBLIC_LOCAL_STORAGE_TOKENS_KEY: string;
  }
}