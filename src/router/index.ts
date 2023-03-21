import { createRouter, createWebHistory } from 'vue-router';

import home from '@/feature/home/home.router';
import user from '@/feature/user/user.router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...home, ...user],
});
import { useUserStore } from '@/stores/user';

router.beforeEach(to => {
  const userStore = useUserStore();
  if (to.name !== 'login' && !userStore.isLogin) {
    return '/login';
  }
});

export default router;
