<template>
  <div class="row">
    <div class="container">
     <h4>Registrar</h4>
       <div class="col s12 m12 offset-m2 l6 ">         
            <div class="col s12 m12 l12">
              <img src="../../public/img/Elpuente.jpg" alt="" class="circle responsive-img"> <!-- notice the "circle" class -->
            </div>        
      </div> 

  <form @submit.prevent="validarUsuario" class="col s12 m6 ">
      <div class="row center">
        <div class="input-field col s12">
          <input
            v-model.trim="email"
            id="email"
            type="email"
            class="validate"/>
          <label for="email">Email</label>
        </div>

        <div class="input-field col s12">
          <input
            v-model.trim="pass1"
            id="password"
            type="password"
            class="validate"/>
          <label for="password">Password</label>
        </div>

        <div class="input-field col s12">
          <input
            v-model.trim="pass2"
            id="passwordConfirm"
            type="password"
            class="validate"/>
          <label for="passwordConfirm">Confirmar Password</label>
        </div>
      </div>

      <button class="waves-effect waves-light purple darken-4 btn" type="submit">
        Registrar
      </button>
    </form> 
    
  </div>  
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import router from "../router/index";

const showAlert = () =>{
      Swal.fire({
        icon: 'error',
        title: 'Uppsss.!!',
        text: 'La contrasena debe ser mayor a 6 caracteres y debe contener al menos (Ab./)',
    })
}

export default {
  data: () => ({
    email: "",
    pass1: "",
    pass2: "",
  }),

  
  methods: {
    async validarUsuario() {
      if (
        this.pass1 === this.pass2 &&
        this.pass1.length >= 6 &&
        this.email != ""
      ) {
        
        const API_KEY = "AIzaSyBMHdjiuHgpdlONMRI9fSLLr3MS0HI-5wo";

        const res = await fetch(
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
          {
            method: "POST",
            body: JSON.stringify({
              email: this.email,
              password: this.pass1,
              returnSecureToken: true,
            }),
          }
        );

        const data = await res.json();
        localStorage.setItem("user", JSON.stringify(data));

        router.push("/proyectos");
      } else {
        showAlert()
      }
    },
  },
};
</script>

