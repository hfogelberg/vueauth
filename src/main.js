import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from 'firebase';
import firebaseui from 'firebaseui';
import router from './router';
import {config} from './helpers/firebaseConfig';

Vue.use(VueRouter);
new Vue({
  router,
  created() {
    firebase.initializeApp(config)

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        localStorage.setItem('fbPhoto', user.providerData[0].photoURL)
        localStorage.setItem('fbUid', user.displayName)
        localStorage.setItem('fbDisplayName', user.uid)
        this.$router.push('/success')
      } else {
        alert('No user');
        this.$router.push('/auth')
      }
    })    
  },
}).$mount('#app');
