import type { LogInType, RegisterAccountType } from '../../types/auth/login';
import http from '../http.service';

const UserService = {
  login: async ({ email, password }: LogInType) => {
    const response = await http.POST('/auth/login', { email, password });
    return response;
  },
  register: async ({ name, email, password }: RegisterAccountType) => {
    const response = await http.POST('/auth/register', {
      name,
      email,
      password,
    });
    return response;
  },
  userByToken: async (token: string) => {
    const response = await http.POST('/auth/user-by-token', { token });
    return response;
  },
};

export default UserService;
