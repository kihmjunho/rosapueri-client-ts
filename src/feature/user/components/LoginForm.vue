<template>
  <div class="login">
    <div>로그인</div>

    <form @submit.prevent="submit">
      <div>
        <label for="username">username: </label>
        <input id="username" type="text" v-model="username" />
      </div>
      <div>
        <label for="password">pw: </label>
        <input
          id="password"
          type="password"
          v-model="password"
          autocomplete="on"
        />
      </div>

      <button type="submit">로그인</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { UserData } from '@/types/types';

const username = ref('');
const password = ref('');

const emit = defineEmits<{ (e: 'submit', value: UserData): void }>();
const submit = () => {
  const userData = {
    username: username.value,
    password: password.value,
  };

  emit('submit', userData);

  username.value = '';
  password.value = '';
};
</script>

<style lang="scss" scoped></style>
