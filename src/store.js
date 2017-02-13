import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import user from './modules/user'
import stack from './modules/stack'
import card from './modules/card'

export const store = new Vuex.Store({
  modules: {
    user,
    stack,
    card
  }
})
