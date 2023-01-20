export type TokenTypes = 'ACCESS' | 'REFRESH';

export interface IToken {
  token: string;
  expires: number;
}

export interface IAuthTokens {
  ACCESS: IToken;
  REFRESH: IToken;
}
