import VueRouter from 'vue-router';
import Hello from './components/Hello.vue';
import Auth from './components/Auth.vue';
import AuthSuccess from './components/AuthSuccess.vue';
import Stacks from './components/Stacks.vue'

const checkFromAuth = (to, from, next) => {
  const query = window.location.search.substr(1).split('=');
  if (query[0] === 'mode') {
    console.log('Redirecting to auth');
    next({
      path: '/auth',
      query: { mode: query[1] },
    });
  } else {
    next();
  }
};

const router = new VueRouter({
  mode: 'hash',
  routes: [
    { path: '/', component: Hello, beforeEnter: checkFromAuth },
    { path: '/hello', component: Hello},
    { path: '/auth', component: Auth },
    { path: '/success', component: AuthSuccess },
    {path: '/stacks', component: Stacks}
  ],
});
router.beforeEach((to, from, next) => {
  // check for auth
  next();
});

export default router;
