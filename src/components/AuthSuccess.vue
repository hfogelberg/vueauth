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
        {{this.user}}
      </pre>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data(){
    return {
      user: this.$store.getters.user,
      photo: this.$store.getters.photoUrl,
      userId: this.$store.getters.userId,
      displayName: this.$store.getters.displayName
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
