<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <!-- Cabecera con los logos de la web y carrusel de fotos -->
    <div id="principal" class="container-xl">
      <div class="row align-items-center">
        <div class="col-6">
          <img src="../assets/img1.png" alt="Nombre de la web: reservueling.com" width="396px" height="75px">
        </div>
        <div class="col-6 text-end">
          <img src="../assets/normal_u38.png" alt="Logotipo de reservueling"  height="75px">
        </div>
      </div>
      <div class="row">
        <div class="col-12">
            <div id="carouselAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../assets/normal_u1.jpg" class="foto-carrusel d-block w-100 img-fluid" alt="fotografía panorámica de París por la noche">
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/normal_u7.jpg" class="foto-carrusel d-block w-100 img-fluid" alt="fotografía panorámica de Londres por la noche y el río Támesis">
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/panoramica-coliseo-arco-constantino-roma-italia.jpg" class="foto-carrusel d-block w-100 img-fluid" alt="Fotografía panorámica del Coliseo romano y el Arco de Trajano, Roma, Italia">
                    </div>
                </div>
                
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
         </div>
      </div>
    </div>
</template>

<style>
  /* Hojas de estilos para la web */
  body {
    background-color: #253347;
    color: white;
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  }
   .row { 
        padding: 0px;
        margin: 10px 0;
      }
  .carousel-item {
    max-height: 40vh;
  }
  .foto-carrusel {
    width: 100%;
  }
  .formulario-viaje-inicio {
    background-color: #F2F2F2;
    padding: 1em 0;
    font-size: 14px;
    margin: 2em 0;
  }
  .formulario-viaje-inicio h1 {
    font-size: 24px;
    font-weight: bold;
  }
  .formulario-viaje-inicio label {
    font-size: 18px;
    font-weight: bold;
  }
  .formulario-origen-destino {
    border: solid 2px #1E98D7;
  }
  .formulario-origen-destino select {
    width: 90%;
  }
  .btn-light {
    border: solid 1px #1E98D7;
  }
  .btn-info:hover {
    color: white;
    background-color: #c00;
  }
  .acceso {
    padding: 2em;
    text-align: end;
  }
  .acceso label {
    max-width: 8.5rem;
  }
  .acceso button {
    margin: .2em;
    width: 12.3rem;
  }
  .mejor-vuelo {
    padding: 2em 1em;
    text-align: right;
  }
  .mejor-vuelo button {
    margin: .2em;
    width: 12.3rem;
  }

  .seccion-clara {
    background-color: white;
    color: #253347;
  }
  /* Pie de página */
  footer {
    margin-top: 1em;
  }
  footer ul {
    list-style: none;
  }
  footer li {
    display: inline;
    margin-left: 3em;
  }
</style>
