<script setup>
import LoginComponent from './LoginComponent.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
console.log(`[LOG] store:`, store.state);

const isLoggedIn = computed(() => {
  console.log(`[LOG] isLoggedIn:`, store.state.loggedIn);
  return store.getters.isLoggedIn;
});

const logout = () => {
  store.commit('logout');
};
</script>

<template>
  <header class="header">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink v-if="isLoggedIn" to="/history">History</RouterLink>
    <RouterLink to="/about" class="align-left">About</RouterLink>
    <RouterLink v-if="!isLoggedIn" to="/register" >Register</RouterLink>
    <LoginComponent v-if="!isLoggedIn">
    </LoginComponent>
    <a v-if="isLoggedIn" @click="logout">Logout</a>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  background-color: rgb(37, 51, 70);
  padding: 1rem;

  &>a {
    color: white;
    margin-left: 1rem;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  &>.align-left {
    margin-right: auto;
  }
}
</style>
