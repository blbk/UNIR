<script setup>
import { ref } from 'vue';

defineProps(['label', 'options'])
const emit = defineEmits(['changeValue'])

const value = ref(null)

function onChange() {
  emit('changeValue', value.value);
}
</script>

<template>
  <label for="origen">{{ label }}</label>
  <select id="origen" class="form-select" aria-label="origen select" v-model="value" @change="onChange">
    <option v-for="option in options" :value="option.value" :key="option.vlaue">{{ option.text }}</option>
  </select>
</template>