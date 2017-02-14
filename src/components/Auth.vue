<template>
  <div class="">
    <div id="firebaseui-auth-container"></div>
    <hr>
    <img :src="photo"  style="height: 120px"> <br>
    <p>{{photo}}</p>
    <p>{{displayName}}</p>
    <hr>
    <pre>{{user}}</pre>
  </div>
</template>


<script>

import firebase from 'firebase';
import firebaseui from 'firebaseui'
import {config} from '../helpers/firebaseConfig';

export default {
  name: 'auth',
  data(){
    return {
      user: {},
      token: '',
      provider: {},
      photo: '',
      displayName: ''
    }
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('onAuthStateChanged');
      if(user) {
        this.user = user

        this.provider = user.providerData[0]
        let photo = this.provider.photoURL
        this.photo = photo

        localStorage.setItem('fbPhoto', photo)
        localStorage.setItem('fbUid', user.uid)
        localStorage.setItem('fbDisplayName', user.displayName)

        this.$store.dispatch('setUser', user)
          .then(()=>this.$router.push('/success'))

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
