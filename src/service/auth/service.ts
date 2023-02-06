import type { LogInType } from '../../types/auth/login';
import http from '../http.service';

const UserService = {
  login: async (data: LogInType) => {
    const response = await http.POST('/auth/login', data);
    return response;
  },
};

export default UserService;
