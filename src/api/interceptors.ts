// import { getTokenFromCookie } from '@/utils/cookies';
import type {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from 'axios';

export function setInterceptors(instance: AxiosInstance) {
  instance.interceptors.request.use(
    function (config: InternalAxiosRequestConfig<any>) {
      config.headers.Authorization = '';
      return config;
    },
    function (error: AxiosError) {
      return Promise.reject(error);
    },
  );

  return instance;
}
