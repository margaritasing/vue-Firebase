<template>
  
    <div class="container center ">
      <div class="row">

      <h4>Log In</h4> 
      <div class="col s12 center  offset-l4 l4 ">         
            <div class="col s12 m12 l12">
              <img src="../../public/img/Elpuente.jpg" alt="" class="circle responsive-img"> <!-- notice the "circle" class -->
            </div>        
      </div> 
           

    <form @submit.prevent="validarUsuario()" class="col s12">
      <div class="row">
        <div class="input-field col s12 m6 offset-l3 l6 ">
          <input
            v-model.trim="email"
            id="email"
            type="email"
            class="validate"
          />
          <label for="email">Email</label>
        </div>

        <div class="input-field col s12 m6 offset-l3 l6">
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
  <footer class="  purple darken-1">
          <div class="container">
            <div class="row">
              <div class="col l12 m12 s12">
                <h5 class="white-text">Libia MFM</h5>               
              </div>
            </div>
          </div>
        </footer> 

  
   
</div>

  
</template>

<script>
import router from "../router/index";
import Swal from 'sweetalert2';

const showAlert = () =>{
      Swal.fire({
        icon: 'error',
        title: 'Uppsss.!!',
        text: 'Contrasena incorrecta',
    })
}

const showEmail = () =>{
      Swal.fire({
        icon: 'error',
        title: 'Uppsss.!!',
        text: 'Email No Existe',
    })
}

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
            showEmail();
          } else {
            this.errors = false;
            localStorage.setItem("user", JSON.stringify(data));
            router.push("/proyectos");
          }
        } catch (error) {        

        }
      } else {
        showAlert();
         
      }
    },
  
  },
 
};
</script>



