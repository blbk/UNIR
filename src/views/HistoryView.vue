<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
    <TheWelcome/>
  <main>

    <div class="container-lg fondo">
      <div class="row">
        <tr>
          <h1>
            ¡Buenos días, María!
          </h1>
        </tr>
        <tr>
          <h2>
            Estos son los últimos viajes con nosotros ¿Quieres repetir alguno?
          </h2>
        </tr>
      </div>

      <div class="container-fluid mi-container">
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
          </div>
          <div class="col-12 col-md-4">
            <div class="row justify-content-center align-items-center">
              <button type="button" class="btn btn-light btn-cerrar-sesion">Cerrar Sesión</button>
            </div>

            <div class="row justify-content-center align-items-center">
                <button type="button" class="btn btn-info">
                  Reservar la Oferta del Día
                </button>
            </div>

          </div>
          <div class="row justify-content-center align-items-center">
            <div class="col justify-content-right align-items-right">
              <button type="button" class="btn btn-cerrar-sesion btn-light">Quiero buscar otras ofertas o destinos</button>
            </div>
            <div class="col align-items-center justify-content-end">
              <button type="button" class="btn btn-info btn-reservar-oferta">
                ¡Hazme una oferta de lo que QUIERO REPETIR!
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div class="row">
          <div class="col-12 col-md-4 text-left">
            Inicio &nbsp; > &nbsp; Oferta &nbsp; > &nbsp; <strong>Portal del usuario</strong> 
            <!--
            <ul>
              <li>Inicio</li>
              <li> > </li>
              <li>Oferta</li>
              <li> > </li>
              <li>Portal del usuario</li>
            </ul>
            -->
          </div>
          <div class="col-12 col-md-8 text-end">
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
