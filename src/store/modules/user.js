const state = {
  user: null,
  fbApp: null,
  fbUiApp: null,
}

const getters = {
  user: state => {
    return state.user
  },
  fbApp: state => {
    return state.fbApp
  },
  fbUiApp: state => {
    return state.fbUiApp
  }
}

const mutations = {
  SET_USER: (state, user) =>{
    state.user = user;
  },
  SET_FB_APP:(state, fbApp) => {
    state.fbApp = fbApp;
  },
  SET_FB_UI_APP:(state, fbUiApp)=> {
    state.fbUiApp = fbUiApp;
  },
}

export default {
  state,
  getters,
  mutations
}
