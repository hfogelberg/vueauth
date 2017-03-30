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
    this.userId = localStorage.getItem('fbUid')
    this.displayName = localStorage.getItem('fbDisplayName')
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
        localStorage.removeItem('fbPhoto')
        localStorage.removeItem('fbUid')
        localStorage.removeItem('fbDisplayName')
        firebase.auth().signOut()
        this.$router.push('/auth')
      }
  },
};
</script>
