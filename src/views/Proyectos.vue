<template>
  <div class="container">
  <div class="row ">
    <div class="col s12 m12 l12 ">
      <h2 class="texto">Estructura del Proyecto</h2>
   
     </div>
    <div class="row">
      <router-link
        to="/reg-projects"
        class="col s12 m12 l12 waves-effect waves-light btn purple lighten-1">
        <i class="material-icons">add</i>
        Crear Tarea
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

<style scoped>

.texto{
  text-align: center;
}




</style>


