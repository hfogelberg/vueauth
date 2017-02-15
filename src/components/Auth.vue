<template>
  <div class="">
    <h1>Auth</h1>
    <hr>
    <div id="firebaseui-auth-container"></div>
  </div>
</template>


<script>

import firebase from 'firebase';
import firebaseui from 'firebaseui'
import {config} from '../helpers/firebaseConfig';

export default {
  name: 'auth',

  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.$store.dispatch('setUser', user)
          .then(()=>{
            this.$router.push('/success')}
          )

      } else {
        console.log('No user');
      }
    })
  },

  mounted() {
    var uiConfig = {
      signInSuccessUrl: '/success',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ]
    };

    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', uiConfig);
  },
};
</script>

<style src="firebaseui/dist/firebaseui.css"></style>
