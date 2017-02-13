import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router';
import {store} from './store/store.js'
import { FBApp, FBUIApp } from './helpers/firebaseConfig';

FBApp.auth().onAuthStateChanged(user => store.commit('SET_USER', user));
store.commit('SET_FB_APP', FBApp);
store.commit('SET_FB_UI_APP', FBUIApp);

Vue.use(VueRouter);
/* eslint-disable no-new */
new Vue({
  router,
  store,
}).$mount('#app');
