<script setup>
import { ref } from 'vue'
import CarrouselComponent from '../components/CarrouselComponent.vue'
import SelectComponent from '../components/SelectComponent.vue'
import ButtonComponent from '../components/ButtonComponent.vue'

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
  <CarrouselComponent />

  <main>
    <div class="container-lg">
      <div class="col-12 col-md-8 col-lg-6">
        <h1>
          ¡Busca tu destino deseado<br>y nosotros encontraremos lo mejor para ti!
        </h1>
        <div class="row">
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
          <div class="col-12 col-lg-4">
            <section class="mejor-vuelo">
              <button type="button" class="btn btn-info">
                Dime el mejor vuelo
              </button>
              <img src="../assets/normal_u38.png" alt="Logotipo de reservueling" height="30px">
            </section>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4">
          <section class="acceso">
            <label>¿Ya eres cliente?</label>
            <ButtonComponent value="Accede a mis viajes"></ButtonComponent><br>
            <label>No soy cliente </label>
            <ButtonComponent color="light" value="Quiero darme de alta"></ButtonComponent>
          </section>
        </div>
      </div>
      <footer>
        <div class="row">
          <div class="col-2">
            Inicio
          </div>
          <div class="col-10 text-end">
            <ul>
              <li>Condiciones</li>
              <li>Quiénes somos</li>
              <li>Política de protección de datos</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  </main>
</template>
