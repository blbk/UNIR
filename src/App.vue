<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header class="header">
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <!-- <div class="wrapper"> -->
    <!-- <HelloWorld msg="You did it!" /> -->

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/history">History</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <!-- </div> -->
  </header>

  <RouterView class="router-content"/>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  background-color: white;
}

.router-content {
  margin-top: 2rem;
}
</style>
