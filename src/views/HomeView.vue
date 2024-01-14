<script setup>
import ButtonComponent from '@/components/ButtonComponent.vue';
import CarrouselComponent from '../components/CarrouselComponent.vue'
import FindTripFormComponent from '@/components/FindTripFormComponent.vue';

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
          <FindTripFormComponent></FindTripFormComponent>
          <div class="col-12 col-lg-4">
            <section class="mejor-vuelo">
              <!-- <RouterLink to="/" -->
              <ButtonComponent value="Ver mejor vuelo"></ButtonComponent>
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
