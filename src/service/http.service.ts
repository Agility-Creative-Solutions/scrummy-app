import config from '../config/config';

const POST = async (path: string, data: any) => {
  const response = await fetch(`${config.API_URL}/${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${localStorage.getItem('token') || ''}`,
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

const DELETE = async (path: string) => {
  const response = await fetch(`${config.API_URL}/${path}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${localStorage.getItem('token') || ''}`,
    },
  });
  return response.json();
};

const GET = async (path: string) => {
  const response = await fetch(`${config.API_URL}/${path}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${localStorage.getItem('token') || ''}`,
    },
  });
  return response.json();
};

const PUT = async (path: string, data: any) => {
  const response = await fetch(`${config.API_URL}/${path}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${localStorage.getItem('token') || ''}`,
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

const PATCH = async (path: string, data: any) => {
  const response = await fetch(`${config.API_URL}/${path}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${localStorage.getItem('token') || ''}`,
    },
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
