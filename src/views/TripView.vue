<script setup>
import ButtonComponent from '@/components/ButtonComponent.vue';
import CarrouselComponent from '../components/CarrouselComponent.vue'



</script>

<template>
  <CarrouselComponent />

  <main>
    <div class="container-lg p-5">
      <h1>title</h1>
      <p>De {{ from }} a {{ to }} (I/V)</p>
      <p>Del {{ dateStart }} al {{ dateEnd }} por solo <span>{{ randomPrice }}!</span></p>
      <p>Quieres mas opciones?</p>

      <div class="">
        <ButtonComponent value="Ver mas vuelos"></ButtonComponent>
        <ButtonComponent value="Ver mas destinos"></ButtonComponent>
      </div>
      <ButtonComponent value="Reservar"></ButtonComponent>
    </div>
  </main>
</template>

<style scoped>

</style>

