<template>

<div class="container">
    <div class="row">
    <form @submit.prevent=""   class="col s12">
        <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate">
          <label for="email">Correo</label>
        </div>
      </div>
     <div class="row">
        <div class="input-field col s12">
          <input id="password" type="password" class="validate">
          <label for="password">Contrasena</label>
        </div>
      </div>
       <div class="row">
        <div class="input-field col s12">
          <input id="password" type="password" class="validate">
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

}
</script>

<style>

</style>