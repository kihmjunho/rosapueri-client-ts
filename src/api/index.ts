import axios from 'axios';

import { setInterceptors } from './interceptors';

function createInstance() {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_API,
  });

  return setInterceptors(instance);
}

export const instance = createInstance();
