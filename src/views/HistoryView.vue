<script setup>
import ButtonComponent from '@/components/ButtonComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import CarrouselComponent from '@/components/CarrouselComponent.vue'
</script>

<template>
  <CarrouselComponent />

  <main>
    <div class="container-lg fondo">
      <div class="row seccion-clara">
        <h1>
          ¡Buenos días, María!
        </h1>
        <h2>
          Estos son los últimos viajes con nosotros ¿Quieres repetir alguno?
        </h2>

        <div class="row seccion-clara">
          <div class="col-8 justify-content-center align-items-center">
            <!-- Tabla -->
            <table class="table justify-content-center align-items-center">
              <!-- Encabezado de la tabla -->
              <thead>
                <tr>
                  <th>Origen</th>
                  <th>Destino</th>
                  <th>Salida</th>
                  <th>Regreso</th>
                  <th>Compañía</th>
                  <th>Importe</th>
                  <th>Quiero repetir</th>
                </tr>
              </thead>
              <!-- Filas de datos -->
              <tbody>
                <!-- Fila 1 -->
                <tr>
                  <td>Madrid</td>
                  <td>Londres</td>
                  <td>17-03-2023</td>
                  <td>20-03-2023</td>
                  <td>Iberia</td>
                  <td>255 €</td>
                  <td><input type="checkbox"></td>
                </tr>
                <!-- Fila 2 -->
                <tr>
                  <td>Madrid</td>
                  <td>París</td>
                  <td>15-02-2023</td>
                  <td>18-02-2023</td>
                  <td>American Airlines</td>
                  <td>198 €</td>
                  <td><input type="checkbox"></td>
                </tr>
                <!-- Fila 3 -->
                <tr>
                  <td>Madrid</td>
                  <td>Zurich</td>
                  <td>22-11-2022</td>
                  <td></td>
                  <td>British Airways</td>
                  <td>332 €</td>
                  <td><input type="checkbox"></td>
                </tr>
              </tbody>
            </table>
            <div class="row justify-content-center align-items-center">
              <div class="col justify-content-right align-items-right">
                <ButtonComponent value="Quiero buscar otras ofertas o destinos" color="light" />
              </div>
              <div class="col align-items-center justify-content-end">
                <ButtonComponent value="¡Hazme una oferta de lo que QUIERO REPETIR!" />
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="row justify-content-center align-items-center">
              <ButtonComponent value="Cerrar Sesión" color="light" />
            </div>

            <div class="row justify-content-center align-items-center">
              <ButtonComponent value="Reservar la Oferta del Día" />
            </div>

          </div>

        </div>
      </div>

      <FooterComponent></FooterComponent>
    </div>
  </main>
</template>
