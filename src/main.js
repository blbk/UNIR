import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state() {
    return {
      isLoggedIn: false,
      user: null
    }
  },
  getters: {
    isLoggedIn(state) {
      console.log(`[LOG] getter isLoggedIn`);
      return state.isLoggedIn
    },
    user(state) {
      console.log(`[LOG] getter user`);
      return state.user
    }
  },
  mutations: {
    login(state) {
      console.log(`[LOG] mutation login`);
      state.isLoggedIn = true
    },
    setUser(state, user) {
      console.log(`[LOG] mutation setUser`);
      state.user = user
    },
    logout(state) {
      console.log(`[LOG] mutation logout`);
      state.isLoggedIn = false
    }
  }
})

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
