import type {
  LogInType,
  RegisterAccountType,
  ResetPassword,
} from '../../types/auth/login';
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
  resetPassword: async (data: ResetPassword, token?: string) => {
    const response = await http.PATCH(`/auth/reset-password/${token}`, data);
    return response;
  },
};

export default UserService;
