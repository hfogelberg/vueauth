<template>
  <div class="hello">
    <h1>Hello</h1>
    <pre>current user: {{user}}</pre>

    <ul>
       <router-link to="/auth">Go to auth</router-link>
       <button v-if="user" @click="signOut">Sign out</button>
    </ul>
    </h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import firebase from 'firebase';

export default {
  name: 'hello',

  created() {
      console.log('Hello created');
  },

  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  computed: {
    ...mapGetters({
      user: 'user',
    }),
  },

  methods: {
    signOut() {
      firebase.auth().signOut().then(this.onSignOut, this.onError);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
