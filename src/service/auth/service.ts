import http from '../http.service';
import type { LogInType } from './types';

const UserService = {
  login: async (data: LogInType) => {
    const response = await http.POST(
      'http://24.199.108.242/v1/auth/login',
      data
    );
    return response;
  },
};

export default UserService;
