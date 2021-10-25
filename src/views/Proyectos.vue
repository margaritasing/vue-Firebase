<template>
  <div class="container">
  <div class="col s12 l12">
      <h1>Vista Proyectos</h1>
    <hr />
    <div class="row">
      <router-link
        to="/reg-projects"
        class="col s12 waves-effect waves-light btn purple lighten-1">
        <i class="material-icons">add</i>
        Crear Proyecto
      </router-link>
    </div>
       <contenedor />
    </div>
  
  </div>
  
</template>

<script>
import Contenedor from "../components/Contenedor.vue";


export default {
  components: { Contenedor },
};
</script>


