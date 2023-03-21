<template>
  <h2 class="user-main__title">signup</h2>

  <form @submit.prevent="signupEvent" class="user-form">
    <label for="username" hidden>username</label>
    <input
      id="username"
      class="user-form__input"
      type="text"
      v-model="username"
    />

    <label for="password" hidden>password</label>
    <input
      id="password"
      class="user-form__input"
      type="password"
      v-model="password"
      autocomplete="on"
    />

    <button class="user-form__btn" type="submit">signup</button>
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { UserData } from '@/types/types';

const username = ref('');
const password = ref('');

const emit = defineEmits<{ (e: 'signup', value: UserData): void }>();

const signupEvent = () => {
  const userData = {
    username: username.value,
    password: password.value,
  };

  emit('signup', userData);

  username.value = '';
  password.value = '';
};
</script>
