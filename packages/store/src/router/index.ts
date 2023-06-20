import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '@/stores/UserStore';
import { storeToRefs } from 'pinia';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/pagamento',
      name: 'pagamento',
      component: () => import('../views/PaymentView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/agendamento',
      name: 'agendamento',
      component: () => import('../views/ScheduleView.vue'),
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: () => import('../views/ProfileView.vue')
    },
  ]
})

router.beforeEach(async (to, from, next) => {
  const user = useUserStore();
  const {isAuthenticated} = storeToRefs(user);
  if (!isAuthenticated && to.name !== 'login' && to.name !== 'home') {
    return next('login')
  }
  return next();
})

export default router
