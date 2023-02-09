import type { LogInType, RegisterAccountType } from '../../types/auth/login';
import http from '../http.service';

const UserService = {
  login: async (data: LogInType) => {
    const response = await http.POST('/auth/login', data);
    return response;
  },
  register: async (data: RegisterAccountType) => {
    const response = await http.POST('/auth/register', data);
    return response;
  },
};

export default UserService;
