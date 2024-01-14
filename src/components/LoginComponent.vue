<script setup>

import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const shouldShow = ref(false);

function toggleLoginPopup() {
  console.log(`[LOG] open`);
  shouldShow.value = !shouldShow.value;
}

function onSubmit(a) {
  console.log(`[LOG] submit`,a);
  store.commit('login');
}

</script>

<template>
  <a @click="toggleLoginPopup">Login</a>

  <div v-if="shouldShow" class="container">
    <h1 class="text-center">Login</h1>
    <form v-on:submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" class="form-control" id="email">
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password">
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<style scoped>
a {
  color: white;
  margin-left: 1rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

.container {
  padding: 1rem;
  position: absolute;
  right: 0;
  top: 3rem;
  background: rgb(37, 51, 70);

  border: 1px #1E98D7 solid;
  width: 20rem;
}
</style>

