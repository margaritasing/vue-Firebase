<template>
  <div>
    <nav>
      <div class="nav-wrapper purple darken-1">
        <router-link class="brand-logo" to="/">Proyectos</router-link>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"
          ><i class="material-icons">menu</i></a
        >
        <ul class="right hide-on-med-and-down">
          <li>
            <router-link v-if="!sesion" to="/">Registro</router-link>
          </li>
          <li>
            <router-link v-if="!sesion" to="/login">LogIn</router-link>
          </li>
          <li>
            <router-link
              v-if="sesion"
              to="/proyectos"
              class="waves-effect waves-light btn purple darken-4">
              Proyectos
            </router-link>
          </li>
          <li>
            <router-link
              v-if="sesion"
              to="/login"
              @click="cerrarSesion"
              class="waves-effect waves-light btn purple darken-4 ">
              Cerrar Sesion
            </router-link>
          </li>
        </ul>
      </div>
    </nav>

    <ul class="sidenav" id="mobile-demo">
      <li>
        <router-link v-if="!sesion" to="/">Registrar</router-link>
      </li>
      <li>
        <router-link v-if="!sesion" to="/login">LogIn</router-link>
      </li>
      <li>
        <router-link v-if="sesion" to="/proyectos">
          Proyectos
        </router-link>
      </li>

      <li>
        <router-link
          v-if="sesion"
          to="/login"
          @click="cerrarSesion"
          class="waves-effect waves-light  purple darken-4 btn">
          Cerrar Sesion
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  mounted() {
    M.AutoInit();
  },
  methods: {
    cerrarSesion() {
      localStorage.removeItem("user");
    },
  },
  computed: {
    sesion() {
      const user = localStorage.getItem("user");
      if (user) {
        return true;
      }

      return false;
    },
  },
};
</script>
