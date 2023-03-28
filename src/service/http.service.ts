import config from '@/config/config';

import { apiFectch } from './api.service';

const { API_URL } = config;

const POST = async (path: string, data: any) =>
  apiFectch(`${API_URL}${path}`, {
    method: 'POST',
    body: JSON.stringify(data),
  });

const DELETE = async (path: string) =>
  apiFectch(`${API_URL}${path}`, {
    method: 'DELETE',
  });

const GET = async (path: string) =>
  apiFectch(`${API_URL}${path}`, {
    method: 'GET',
  });

const PUT = async (path: string, data: any) =>
  apiFectch(`${API_URL}${path}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });

const PATCH = async (path: string, data: any) =>
  apiFectch(`${API_URL}${path}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
  });

export default {
  POST,
  DELETE,
  GET,
  PUT,
  PATCH,
};
