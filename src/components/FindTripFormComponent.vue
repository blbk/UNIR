<script setup>
import { ref } from 'vue'
import SelectComponent from '../components/SelectComponent.vue'

const originOptions = ref([
  { value: null, text: 'Selecciona un origen' },
  { value: '1', text: 'Madrid' },
  { value: '2', text: 'Londres' },
  { value: '3', text: 'París' },
  { value: '4', text: 'Roma' },
])

const destinationOptions = ref([
  { value: null, text: 'Selecciona un destino' },
  { value: '1', text: 'Madrid' },
  { value: '2', text: 'Londres' },
  { value: '3', text: 'París' },
  { value: '4', text: 'Roma' },
])
</script>

<template>
  <div class="col-12 col-lg-8">
    <form action="" class="formulario-origen-destino">

      <SelectComponent label="Origen" :options="originOptions"></SelectComponent>
      <SelectComponent label="Destino" :options="destinationOptions"></SelectComponent>

      <div class="col-12 col-md-5">
        <label for="fecha-ida">Fecha de ida</label>
        <input type="date" id="fecha-ida">
        <label for="fecha-vuelta">Fecha de vuelta</label>
        <input type="date" id="fecha-vuelta">
      </div>
    </form>
  </div>
</template>