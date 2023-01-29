import http from '../http.service';
import type { LogInType } from './types';

const UserService = {
  login: async (data: LogInType) => {
    const response = await http.POST('/auth/login', data);
    return response;
  },
};

export default UserService;
