<script setup>
import LoginComponent from './LoginComponent.vue'

// function toggleLoginPopup()  {
//   console.log(`[LOG] open`);

// }
</script>

<template>
  <header class="header">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/history">History</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/register" class="align-right">Register</RouterLink>
    <LoginComponent>
    </LoginComponent>
    <!-- <a @click="toggleLoginPopup">Login</a> -->
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

  &>.align-right {
    margin-left: auto;
  }
}
</style>
