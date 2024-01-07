<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
    <div class="container text-center">
      <i class="bi bi-android2"></i>
      <div class="row">
        <div class="col-sm-4 col-lg-6 columna" >columna sm 4</div>
        <div class="col-sm-8 col-lg-6 columna">columna sm 8</div>
      </div>
    </div>
</template>

<style>
  body {
    background: silver;
  }
  .row {
        border: solid 3px green;
        padding: 5px;
        margin: 10px;
      }
  .columna {
    background: rgb(25, 0, 191);
    color: aliceblue;
    font-size: 25px;
    border: 5px solid #ebb000;
  }
  i {
    font-size: 200px;
    color:green;
  }
</style>
