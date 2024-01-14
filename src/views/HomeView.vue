<script setup>
// import ButtonComponent from '@/components/ButtonComponent.vue';
import CarrouselComponent from '../components/CarrouselComponent.vue'
// import FindTripFormComponent from '@/components/FindTripFormComponent.vue';
import { ref } from 'vue'
import SelectComponent from '../components/SelectComponent.vue'
import { useStore } from 'vuex';
import FooterComponent from '@/components/FooterComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import LoginComponent from '@/components/LoginComponent.vue';

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
  <CarrouselComponent />

  <main>
    
    <div class="container-lg">
      <div class="row seccion-clara">
        <div class="col-12 col-md-6 col-lg-8">
          <div class="container formulario-viaje-inicio">
            <h1>
              ¡Busca tu destino deseado<br>y nosotros encontraremos lo mejor para ti!
            </h1>
            <div class="row">
              <div class="col-12 col-lg-8">
                <form action="" class="formulario-origen-destino">
                  <div class="row justify-content-between" >
                    <div class="col-12 col-md-7">
                      <SelectComponent label="Origen" :options="originOptions" @change-value="setOrigin"></SelectComponent>
                      <SelectComponent label="Destino" :options="destinationOptions" @change-value="setDestination"></SelectComponent>
                    </div>
                    <div class="col-12 col-md-5">
                      <label for="fecha-ida">Fecha de ida</label>
                      <input type="date" id="fecha-ida" @change="setDepartureDate">
                      <label for="fecha-vuelta">Fecha de vuelta</label>
                      <input type="date" id="fecha-vuelta" @change="setReturnDate">
                    </div>
                  </div>
                </form>
              </div>
              <div class="col-12 col-lg-4">
                <RouterLink to="/trip">
                  <section class="mejor-vuelo">
                    <ButtonComponent value="Dime el mejor vuelo"></ButtonComponent>
                    <img src="../assets/normal_u38.png" alt="Logotipo de reservueling" height="30px">
                  </section>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4">
          <section class="acceso">
            <label>¿Ya eres cliente?</label>
            <ButtonComponent value="Acceder a mis viajes" color="info" />
            <label>No soy cliente </label> 
            <LoginComponent></LoginComponent>
          </section>
        </div>
      </div>

      <FooterComponent></FooterComponent>
    </div>
  </main>
</template>

<style scoped>

.formulario-viaje-inicio h1 {
  font-size: 24px;
  font-weight: bold;
  padding-left: 1rem;
}

</style>