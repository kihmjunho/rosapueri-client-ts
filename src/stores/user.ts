import { defineStore } from 'pinia';

import { setTokenToCookie, setUserIdToCookie } from '@/utils/cookies';

import type { LoginType, UserState } from '@/types/types';

const state = () => ({
  userId: '' as string,
});

const getters = {
  isLogin(state: UserState) {
    return state.userId !== '';
  },
};

const actions = {
  setUser(this: LoginType, data: LoginType) {
    this.userId = data.userId;
    setTokenToCookie(data.accessToken);
    setUserIdToCookie(data.userId);
  },
  getCookies(this: LoginType, userId: string) {
    this.userId = userId;
  },
};

export const useUserStore = defineStore('userStore', {
  state,
  getters,
  actions,
});
