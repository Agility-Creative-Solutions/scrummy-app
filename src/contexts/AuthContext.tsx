import Router from 'next/router';
import { parseCookies, setCookie } from 'nookies';
import { createContext, useEffect, useState } from 'react';

import UserService from '@/service/auth';
import { URLPaths } from '@/utils/URLPaths';

type User = {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  tokens: {
    access: { token: string; expires: string };
    refresh: { token: string; expires: string };
  };
  role: 'user' | 'admin';
};

type SignInData = {
  email: string;
  password: string;
};

type AuthContextType = {
  isLoggedIn: boolean;
  userData: User | null;
  signIn: (data: SignInData) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: any) => {
  const [userData, setUserData] = useState<User | null>(null);
  const isLoggedIn = !!userData;

  useEffect(() => {
    const { 'scrummypoker.token': token } = parseCookies();

    if (token) {
      try {
        UserService.userByToken(token).then((user: User) => {
          setUserData(user);
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  const signIn = async ({ email, password }: SignInData) => {
    const { user, tokens } = await UserService.login({ email, password });

    if (!user) {
      throw new Error('User not found');
    }

    setUserData(user);
    setCookie(undefined, 'scrummypoker.token', tokens?.access?.token, {
      maxAge: 60 * 60 * 1, // 1 hour
    });
    Router.push(URLPaths.dashboard);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userData, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
