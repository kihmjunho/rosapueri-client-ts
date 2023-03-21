import { instance } from '@/api';
import type { UserData } from '@/types/types';

export const checkUser = () => {
  return instance.get(`user/check`);
};
export const postUser = (path: string, userData: UserData) => {
  return instance.post(`user/${path}`, userData);
};
