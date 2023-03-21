<template>
  <AppHeader v-if="isLogin" :isLogin="isLogin" />
  <RouterView />
</template>

<script setup lang="ts">
import { provide } from 'vue';
import AppHeader from './components/AppHeader.vue';

import { storeToRefs, type Store } from 'pinia';
import { useUserStore } from '@/stores/user';
import type { UserState, UserGetters, UserActions } from '@/types/types';
import { getTokenFromCookie, getUserIdFromCookie } from '@/utils/cookies';

const userStore: Store<'userStore', UserState, UserGetters, UserActions> =
  useUserStore();
const { isLogin, userId } = storeToRefs(userStore);
if (getTokenFromCookie()) {
  userStore.getCookies(getUserIdFromCookie());
}

provide('userId', userId.value);
</script>
