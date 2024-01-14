<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <TheWelcome />
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
                      <label for="origen">Origen</label>
                      <select id="origen" class="form-select" aria-label="origen select">
                        <option selected>Madrid</option>
                        <option value="1">Londres</option>
                        <option value="2">París</option>
                        <option value="3">Roma</option>
                      </select>
                      <label for="destino">Destino</label>
                      <select id="destino" class="form-select" aria-label="destino select">
                        <option selected>Madrid</option>
                        <option value="1">Londres</option>
                        <option value="2">París</option>
                        <option value="3">Roma</option>
                      </select>
                    </div>
                    <div class="col-12 col-md-5">
                      <label for="fecha-ida">Fecha de ida</label>
                      <input type="date" id="fecha-ida">
                      <label for="fecha-vuelta">Fecha de vuelta</label>
                      <input type="date" id="fecha-vuelta">
                    </div>
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
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <section class="acceso">
            <label>¿Ya eres cliente?</label> <button type="button" class="btn btn-info">Acceder a mis viajes</button><br>
            <label>No soy cliente </label> <button type="button" class="btn btn-light">Quiero darme de alta</button>
          </section>
        </div>
      </div>
      <footer>
        <div class="row">
          <div class="col-3">
            Inicio
          </div>
          <div class="col-9 text-end">
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
