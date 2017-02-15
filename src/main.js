import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from 'firebase';
import firebaseui from 'firebaseui';
import router from './router';
import {store} from './store/store.js'
import {config} from './helpers/firebaseConfig';

Vue.use(VueRouter);
new Vue({
  router,
  store,
  created() {
    firebase.initializeApp(config)
  },
}).$mount('#app');
