<template>
  
    <div class="container">
      <div class="row">

      <h4>Log In</h4>
      <hr />
        <div v-if="errors" class="col s12 m7">
      <div class="card horizontal">
        <div class="card-stacked">
          <div class="card-content">
            <h5>Email / Password Invalidos</h5>
          </div>
        </div>
      </div>
    </div>

    <form @submit.prevent="validarUsuario()" class="col s12">
      <div class="row">
        <div class="input-field col s12 l6">
          <input
            v-model.trim="email"
            id="email"
            type="email"
            class="validate"
          />
          <label for="email">Email</label>
        </div>

        <div class="input-field col s12 l6">
          <input
            v-model.trim="pass"
            id="password"
            type="password"
            class="validate"
          />
          <label for="password">Password</label>
        </div>
      </div>

      <button class="waves-effect waves-light purple darken-4 btn" type="submit">
        LogIn
      </button>
    </form>
  </div>


    </div>

  
</template>

<script>
import router from "../router/index";

export default {
  data: () => ({
    email: "",
    pass: "",
    errors: false,
  }),
  methods: {
    async validarUsuario() {
      if (this.pass.length >= 6 && this.email != "") {
        const API_KEY = "AIzaSyBMHdjiuHgpdlONMRI9fSLLr3MS0HI-5wo";

        try {
          const res = await fetch(
            `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
            {
              method: "POST",
              body: JSON.stringify({
                email: this.email,
                password: this.pass,
                returnSecureToken: true,
              }),
            }
          );
          const data = await res.json();

          if (data.error) {
            this.errors = true;
          } else {
            this.errors = false;
            localStorage.setItem("user", JSON.stringify(data));
            router.push("/proyectos");
          }
        } catch (error) {}
      } else {
        return;
      }
    },
  },
};
</script>