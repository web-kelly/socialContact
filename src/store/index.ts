import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  state: {
    indexback:false,

  },
  getters: {
  },
  mutations: {
    updateback (state, indexbackflag) {
      state.indexback =indexbackflag
    }
  },
  actions: {
  },
  modules: {
  },
  // plugins: [
  // //   createPersistedstate({
  // //     key: 'abc',
  // //     paths: ['user', 'cart']
  // //  })

  // createPersistedState()
  // ]

  plugins: [createPersistedState()],

})
