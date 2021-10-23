<template>

<div class="container">
    <div class="row">
    <form @submit.prevent="validarusuario" class="col s12">
        <div class="row">
        <div class="input-field col s12">
          <input  v-model.trim="email" id="email" type="email" class="validate">
          <label for="email">Correo</label>
        </div>
      </div>
     <div class="row">
        <div class="input-field col s12">
          <input v-model.trim="pass1"  id="password" type="password" class="validate">
          <label for="password">Contrasena</label>
        </div>
      </div>
       <div class="row">
        <div class="input-field col s12">
          <input v-model.trim="pass2"  id="passwordconfir" type="password" class="validate">
          <label for="password">Password</label>
        </div>
      </div>

      <button class="waves-effect waves-light btn" type="submit">Registrar</button>
      
    </form>
  </div>
</div>
        
 
</template>

<script>
export default {
    data: () => ({
        email: "",
        pass1: "",
        pass2: ""
    }),

    methods: {
        async validarusuario(){
            if(this.pass1 === this.pass2 
            && this.pass1.length >= 6 
            && this.email != ""){
                
                const API_KEY = "AIzaSyBMHdjiuHgpdlONMRI9fSLLr3MS0HI-5wo"


                const res =  await fetch(`https://identitytoolkit.googleapis.com/v1/
                accounts:signUp?key=${API_KEY}`,{
                    method: "POST",
                    body: JSON.stringify({
                        email: this.email,
                        password: this.pass1,
                        returnSecureToken: true                       
                    })
                })                
            }
        },
    },

};
</script>