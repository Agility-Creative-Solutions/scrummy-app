import { parseCookies } from 'nookies';

const getAuthorizationBearer = () => {
  const { token } = parseCookies();
  return token;
};

export const apiFectch = async (url: string, options: any) => {
  const token = getAuthorizationBearer() ?? '';

  const response = await fetch(url, {
    ...options,
    headers: {
      ...options?.headers,
      'Content-Type': 'application/json',
      ...(token
        ? {
            Authorization: options?.headers?.Authorization || `Bearer ${token}`,
          }
        : {}),
    },
  });

  return response.json();
};
