<template>
  <div>
      <h1>Signup succeeded</h1>
      <button @click='logOut'>Log out</button>
      <hr>
      <img :src="photo"  style="height: 120px"> <br>
      <p>{{name}}</p>
      <p>{{email}}</p>
      <p>{{userId}}</p>
      <hr>
      <pre>{{user}}</pre>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  created() {
    this.user = firebase.auth().currentUser;
    if(this.user) {
      this.name = this.user.displayName;
      this.email = this.user.email;
      this.photo = this.user.photoURL;
      this.userId = this.user.uid;
    }
  },

  data(){
    return {
      photo: '',
      userId: '',
      name: '',
      email: '',
      user: {}
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
