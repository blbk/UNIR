<script setup>
import { ref } from 'vue'
import SelectComponent from '../components/SelectComponent.vue'
import { useStore } from 'vuex';

const store = useStore();

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

const tripInfo = {
  origin: null,
  destination: null,
  departureDate: null,
  returnDate: null,
}

function setOrigin(value) {
  tripInfo.origin = value;
}
function setDestination(value) {
  tripInfo.destination = value;
}

function setDepartureDate(event) {
  tripInfo.departureDate = event.target.value;
}
function setReturnDate(event) {
  tripInfo.returnDate = event.target.value;
}

store.commit('setTripInfo', tripInfo);
</script>

<template>
  <div class="col-12 col-lg-8">
    <form action="" class="formulario-origen-destino">

      <SelectComponent label="Origen" :options="originOptions" @change-value="setOrigin"></SelectComponent>
      <SelectComponent label="Destino" :options="destinationOptions" @change-value="setDestination"></SelectComponent>

      <div class="col-12 col-md-5">
        <label for="fecha-ida">Fecha de ida</label>
        <input type="date" id="fecha-ida" @change="setDepartureDate">
        <label for="fecha-vuelta">Fecha de vuelta</label>
        <input type="date" id="fecha-vuelta" @change="setReturnDate">
      </div>
    </form>
  </div>
</template>