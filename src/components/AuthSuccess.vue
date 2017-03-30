<template>
  <div>
      <h1>Signup succeeded</h1>
      <button @click='logOut'>Log out</button>
      <hr>
      <img :src="photo"  style="height: 120px"> <br>
      <p>{{displayName}}</p>
      <p>{{userId}}</p>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  created() {
    this.photo = localStorage.getItem('fbPhoto')
    this.userId = localStorage.getItem('fbDisplayName')
    this.displayName = localStorage.getItem('fbUid')
  },

  data(){
    return {
      photo: '',
      userId: '',
      displayName: ''
    }
  },

  methods: {
      logOut() {
        firebase.auth().signOut()
        localStorage.removeItem('fbPhoto')
        localStorage.removeItem('fbUid')
        localStorage.removeItem('fbDisplayName')
        // this.$router.push('/auth')
      }
  },
};
</script>
