<template>
  <div class="user">
    <main class="user-main">
      <LoginForm v-if="loginPage" @submit="submitUser" />
      <SignupForm v-else @signup="submitUser" />
    </main>
  </div>
</template>

<script lang="ts" setup>
import LoginForm from '../components/LoginForm.vue';
import SignupForm from '../components/SignupForm.vue';

import { ref } from 'vue';
import { useRouter } from 'vue-router';

import { checkUser, postUser } from '../user.api';
import { useUserStore } from '@/stores/user';

import type { Store } from 'pinia';
import type {
  UserData,
  UserState,
  UserGetters,
  UserActions,
} from '@/types/types';

const loginPage = ref(true);

(async () => {
  const { data } = await checkUser();
  loginPage.value = data.user;
})();

const router = useRouter();

const submitUser = async (userData: UserData) => {
  const path = loginPage.value ? 'login' : 'signup';

  try {
    const { status, data } = await postUser(path, userData);

    if (loginPage.value) {
      const userStore: Store<'userStore', UserState, UserGetters, UserActions> =
        useUserStore();
      userStore.setUser(data);

      router.push({ name: 'home' });
    }

    if (status === 201) {
      loginPage.value = !loginPage.value;
    }
  } catch ({ response }) {
    console.log('err', response);
  }
};
</script>

<style lang="scss" scoped></style>
