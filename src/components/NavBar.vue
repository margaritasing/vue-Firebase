<template>
  <div class="lighten-2">
    <nav>
    <div class="nav-wrapper purple darken-4">
      <router-link class="brand-logo" to="/">Proyectos</router-link>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link class="waves-effect waves-light btn purple accent-1" to="/proyectos">Proyectos</router-link>
        </li>
      </ul>
    </div>
  </nav>

  <ul class="sidenav" id="mobile-demo">
    <li>
         <router-link to="/">Home</router-link>
    </li>
     <li>
          <router-link to="/about">About</router-link>
     </li>
     <li>
          <router-link to="/proyectos">Proyectos</router-link>
     </li>
   
  </ul>
  </div>
</template>

<script>
export default {
  mounted(){
    M.AutoInit();
  },

}
</script>

<style>

</style>