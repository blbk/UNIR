import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state() {
    return {
      loggedIn: false,
      user: null
    }
  },
  mutations: {
    login(state) {
      state.loggedIn = true
    },
    setUser(state, user) {
      state.user = user
    },
    logout(state) {
      state.loggedIn = false
    }
  }
})

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
