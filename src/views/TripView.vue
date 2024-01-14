<script setup>
import ButtonComponent from '@/components/ButtonComponent.vue';
import CarrouselComponent from '../components/CarrouselComponent.vue'
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();

const originOptions = [
  { value: null, text: 'Selecciona un origen' },
  { value: '1', text: 'Madrid' },
  { value: '2', text: 'Londres' },
  { value: '3', text: 'París' },
  { value: '4', text: 'Roma' },
];

const destinationOptions = [
  { value: null, text: 'Selecciona un destino' },
  { value: '1', text: 'Madrid' },
  { value: '2', text: 'Londres' },
  { value: '3', text: 'París' },
  { value: '4', text: 'Roma' },
]

const from = computed(() => originOptions.find((option) => option.value === store.state.tripInfo.origin).text);
const to = computed(() => destinationOptions.find((option) => option.value === store.state.tripInfo.destination).text);
const dateStart = computed(() => store.state.tripInfo.departureDate);
const dateEnd = computed(() => store.state.tripInfo.returnDate);
const isMissingInfo = computed(() => !from.value || !to.value || !dateStart.value || !dateEnd.value)

</script>

<template>
  <CarrouselComponent />

  <main>
    <div v-if="!isMissingInfo" class="container-lg p-5">
      <h1 class="fs-1">¡Busca tu destino deseado y nosotros encontramos lo mejor para ti!</h1>

      <p class="fs-2">De {{ from }} a {{ to }} (I/V)</p>
      <p class="fs-2">Del {{ dateStart }} al {{ dateEnd }} por solo <span class="fs-1">{{ randomPrice }}!</span></p>

      <p class="fs-3"> ¿Quieres más opciones?</p>
      <div>
        <ButtonComponent class="w-25 m-1" value="Ver mas vuelos"></ButtonComponent>
        <ButtonComponent class="w-25 m-1" value="Ver mas destinos"></ButtonComponent>
      </div>
      <RouterLink to="/">
        <ButtonComponent class="w-50 p-2 ms-1" value="Reservar"></ButtonComponent>
      </RouterLink>
    </div>

    <h1 class="go-back">
      <RouterLink v-if="isMissingInfo" to="/">
        Vuelve atras y selecciona informacion para el vuelo.
      </RouterLink>
    </h1>
  </main>
</template>

<style scoped>
.go-back > a {
  text-decoration: none;
  padding: 0 4rem;
}
</style>

