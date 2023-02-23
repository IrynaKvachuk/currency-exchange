import axios from 'axios';
import { BASE_URL } from './api.config';

const instance = axios.create({
  baseURL: BASE_URL
});

const sleepRequest = (milliseconds: number, originalRequest: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(instance(originalRequest)), milliseconds);
  });
};

const retryRequest = (originalRequest: string) => {
  for (let i = 30000; i < 150000; i += 30000) {
    const request = sleepRequest(i, originalRequest);
    return request.then((response) => response).catch((err) => err);
  }
};

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const { config } = error;
    const originalRequest = config;

    if (error.response.status === 429) {
      retryRequest(originalRequest);
    }
    return Promise.reject(error.response);
  }
);

export default instance;
