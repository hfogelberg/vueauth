import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from 'firebase';
import firebaseui from 'firebaseui';
import router from './router';
import {store} from './store/store.js'
import {config} from './helpers/firebaseConfig';

// firebase.auth().onAuthStateChanged((user) => {
//   console.log('Auth state changed');
//   if(user) {
//     console.log('We have a user');
//   } else {
//     console.log('No user');
//   }
// });
// firebase.onAuthStateChanged((user) => {
//   console.log('Main onAuthStateChanged');
//   if(user) {
//     console.log('We have a user ');
//   } else {
//     console.log('No user');
//   }
// });

Vue.use(VueRouter);
new Vue({
  router,
  store,
  created() {
    firebase.initializeApp(config)
  },
}).$mount('#app');
