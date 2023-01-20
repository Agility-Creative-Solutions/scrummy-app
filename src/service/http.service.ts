const POST = async (url: string, data: any, authorization?: string) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: authorization ?? '',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

const DELETE = async (url: string, authorization?: string) => {
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: authorization ?? '',
    },
  });
  return response.json();
};

const GET = async (url: string, authorization?: string) => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: authorization ?? '',
    },
  });
  return response.json();
};

const PUT = async (url: string, data: any, authorization?: string) => {
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: authorization ?? '',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

const PATCH = async (url: string, data: any, authorization?: string) => {
  const response = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: authorization ?? '',
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
