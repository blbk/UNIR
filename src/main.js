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
      user: null,
      tripInfo: {
        origin: '1',
        destination: '2',
        departureDate: "2024-01-01",
        returnDate: "2024-01-02",
      }
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
    },
    tripInfo(state) {
      console.log(`[LOG] getter tripInfo`);
      return state.tripInfo
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
    },
    setTripInfo(state, tripInfo) {
      console.log(`[LOG] mutation setTripInfo`);
      state.tripInfo = tripInfo
    }
  }
})

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
