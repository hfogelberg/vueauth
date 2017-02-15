<template>
  <div>
      <h1>Signup succeeded</h1>
      <button @click='logOut'>Log out</button>
      <hr>
      <img :src="photo"  style="height: 120px"> <br>
      <p>{{displayName}}</p>
      <p>{{userId}}</p>
      <hr>
      <pre>
        {{user}}
      </pre>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  created() {
      this.user = this.$store.getters.user
      this.photo = this.$store.getters.photoUrl
      this.userId = this.$store.getters.userId
      this.displayName = this.$store.getters.displayName
  },

  data(){
    return {
      user: '',
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

        this.$store.commit('user', '')
        this.$store.commit('userId', '')
        this.$store.commit('photoUrl', '')
        this.$store.commit('displayName', '')
      }
  },
};
</script>
