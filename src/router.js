import VueRouter from 'vue-router';
import Auth from './components/Auth.vue';
import AuthSuccess from './components/AuthSuccess.vue';

const checkFromAuth = (to, from, next) => {
  // alert(window.location.search);
  const query = window.location.search.substr(1).split('=');
  if (query[0] === 'mode') {
    next({
      path: '/auth',
      query: { mode: query[1] },
    });
  } else {
    next();
  }
}


const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Auth, beforeEnter: checkFromAuth },
    // { path: '/', component: AuthSuccess },
    { path: '/auth', component: Auth },
    { path: '/success', component: AuthSuccess }
  ],
});

// router.beforeEach((to, from, next) => {
//   // check for auth
//   next();
// });

export default router;
