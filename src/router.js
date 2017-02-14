import VueRouter from 'vue-router';
import Auth from './components/Auth.vue';
import AuthSuccess from './components/AuthSuccess.vue';

const checkFromAuth = (to, from, next) => {
  const query = window.location.search.substr(1).split('=');
  console.log('checkFromAuth', query);
  if (query[0] === 'mode') {
    console.log('Redirecting to auth');
    next({
      path: '/success',
      query: { mode: query[1] },
    });
  } else {
    next('/auth');
  }
};

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: AuthSuccess, beforeEnter: checkFromAuth },
    // { path: '/', component: AuthSuccess },
    { path: '/auth', component: Auth },
    { path: '/success', component: AuthSuccess }
  ],
});
router.beforeEach((to, from, next) => {
  // check for auth
  next();
});

export default router;
