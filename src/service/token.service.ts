import type { IAuthTokens, TokenTypes } from '@/types/token';

import config from '../config/config';

export const getActiveTokenByType = (type: TokenTypes) => {
  const tokens = localStorage.getItem(config.LOCAL_STORAGE_TOKENS_KEY);

  if (tokens) {
    const parsedTokens: IAuthTokens = JSON.parse(tokens);

    return parsedTokens[type]?.token;
  }

  return '';
};
