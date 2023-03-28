import config from '@/config/config';

import { apiFectch } from './api.service';

const { API_URL } = config;

const POST = async (path: string, data: any) => {
  const API_ENDPOINT = `${API_URL}${path}`;

  const response = await apiFectch(API_ENDPOINT, {
    method: 'POST',
    body: JSON.stringify(data),
  });

  return response.json();
};

const DELETE = async (path: string) => {
  const API_ENDPOINT = `${API_URL}${path}`;

  const response = await apiFectch(API_ENDPOINT, {
    method: 'DELETE',
  });

  return response.json();
};

const GET = async (path: string) => {
  const API_ENDPOINT = `${API_URL}${path}`;

  const response = await apiFectch(API_ENDPOINT, {
    method: 'GET',
  });

  return response.json();
};

const PUT = async (path: string, data: any) => {
  const API_ENDPOINT = `${API_URL}${path}`;

  const response = await apiFectch(API_ENDPOINT, {
    method: 'PUT',
    body: JSON.stringify(data),
  });

  return response.json();
};

const PATCH = async (path: string, data: any) => {
  const API_ENDPOINT = `${API_URL}${path}`;

  const response = await apiFectch(API_ENDPOINT, {
    method: 'PATCH',
    body: JSON.stringify(data),
  });

  return response.json();
};

export default {
  POST,
  DELETE,
  GET,
  PUT,
  PATCH,
};
