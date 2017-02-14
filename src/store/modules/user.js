const state = {
  user: null,
  userId: '',
  photoUrl: '',
  displayName: ''
}

const getters = {
  user: state => {
    return state.user
  },
  userId:state=>{
    return state.userId
  },
  photoUrl:state=>{
    return state.photoUrl
  },
  displayName:state=>{
    return state.displayName
  }

}

const mutations = {
  user: (state, user) =>{
    state.user = user;
  },
  userId: (state, userId) => {
    state.userId=userId
  },
  photoUrl:(state, photoUrl) =>{
    state.photoUrl=photoUrl
  },
  displayName:(state, displayName)=>{
    state.displayName=displayName
  }
}

const actions = {
  setUser:({commit}, payload)=>{
    commit('user', payload)
    commit('userId', payload.uid)
    commit('photoUrl', payload.providerData[0].photoURL)
    commit('displayName', payload.displayName)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
