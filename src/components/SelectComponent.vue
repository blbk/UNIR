<script setup>
defineProps(['label', 'options'])
</script>

<template>
  <label for="origen">{{ label }}</label>
  <select id="origen" class="form-select" aria-label="origen select">
    <option v-for="option in options" :value="option.value" :key="option.vlaue">{{ option.text }}</option>
  </select>
</template>