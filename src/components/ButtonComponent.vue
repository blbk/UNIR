<script setup>
defineProps({
  value: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: 'info',
  },
});
</script>

<template>
  <button type="button" :class="'btn btn-' + color">{{ value }}</button>
</template>

<style></style>