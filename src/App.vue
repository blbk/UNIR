<script setup>
import { RouterView } from 'vue-router'
import Header from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue';
</script>

<template>
  <Header />

  <RouterView />

  <FooterComponent />
</template>

<style scoped></style>
