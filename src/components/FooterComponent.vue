<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const isLoggedIn = computed(() => {
  return store.getters.isLoggedIn;
});

const logout = () => {
  store.commit('logout');
};
</script>

<template>
  <header class="header">
    <RouterLink to="/">Inicio</RouterLink>
    <RouterLink to="/history">Acceder a mis viajes</RouterLink>
    <a v-if="isLoggedIn" @click="logout">Logout</a>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  width: 100%;
  background-color: rgb(37, 51, 70);
  padding: 1rem 0;

  &>a {
    color: white;
    margin-right: 1rem;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
