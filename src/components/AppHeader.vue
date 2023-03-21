<template>
  <header class="header">
    <h1>yourlightness</h1>
    <RouterLink v-if="!props.isLogin" to="/login">login</RouterLink>
    <RouterLink v-else to="/logout">logout</RouterLink>
  </header>
</template>

<script setup lang="ts">
const props = defineProps<{ isLogin: boolean }>();
</script>

<style scoped></style>
