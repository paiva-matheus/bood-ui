import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';

export { api };
