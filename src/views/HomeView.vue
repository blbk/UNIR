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
              <RouterLink to="/trip">
                <ButtonComponent value="Ver mejor vuelo"></ButtonComponent>
              </RouterLink>
              <img src="../assets/normal_u38.png" alt="Logotipo de reservueling" height="30px">
            </section>
          </div>
        </div>

      </div>
    </div>
  </main>
</template>
