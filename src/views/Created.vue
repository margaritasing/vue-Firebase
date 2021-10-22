<template>
  <div class="container">
    <div class="row">
     <router-link to="/proyectos" class="col s12 waves-effect waves-light btn amber darken-3">
          <i class="material-icons">arrow_back</i>
          Regresar a Lista
    </router-link>
   </div>
      <div class="row">
    <form @submit.prevent="createProject" class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input  id="first_name" 
          type="text" 
          v-model="project.title"
          class="validate">
          <label for="first_name">Nombre del proyecto</label>
        </div>
        <div class="input-field col s12">
          <input id="last_name" 
          type="text" 
           v-model="project.responsable"
          class="validate">
          <label for="last_name">Responsable</label>
        </div>
         <div class="input-field col s12">
          <input id="description" 
          type="text"
          v-model="project.description"
          class="validate">
          <label for="description">Descripcion</label>
        </div>
         <p>
            <label>
                <input type="checkbox"
                v-model="project.langs"
                value="Javascript"
                 checked="checked" />
                <span>Javascript</span>
            </label>
         </p>
          <p>
            <label>
                <input type="checkbox" 
                 v-model="project.langs"
                 value="Angular"
                checked="checked" />
                <span>Angular</span>
            </label>
         </p>
          <p>
            <label>
                <input type="checkbox"
                 v-model="project.langs"
                 value="Laravel"
                 checked="checked" />
                <span>Laravel</span>
            </label>
         </p>
          <p>
            <label>
                <input type="checkbox"
                 v-model="project.langs"
                 value="React"
                 checked="checked" />
                <span>React</span>
            </label>
         </p>
         <p>
            <label>
                <input type="checkbox" 
                 v-model="project.langs"
                value="Mongo"
                checked="checked" />
                <span>Mongo</span>
            </label>
         </p>
         <p>
            <label>
                <input type="checkbox"
                v-model="project.langs"
                value="Node" 
                checked="checked" />
                <span>Node</span>
            </label>
         </p>
        <button class="btn waves-effect waves-light col s12" type="submit" name="action">Submit
            <i class="material-icons right">send</i>
        </button>
        
      </div>
      
     
    </form>
    
   </div>
 </div>
        
</template>

<script>
export default {
    data(){
        return  {
            project: {
                title: "",
                responsable: "",
                langs: [],
                description:"",
                status: true,
            },
        };
    },
    methods: {
      async createProject(){
        console.log(this.project)
          const res = await fetch("https://vue-js-a4fb6-default-rtdb.firebaseio.com/projects.json",
          {
            method: "POST",
            body: JSON.stringify(this.project),

          });
        
         
       },
     
    },

};
</script>

