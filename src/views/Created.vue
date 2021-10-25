<template>
  <div class="container">
    <div class="row  caja">
      <router-link
        to="/proyectos"
        class="col s12 waves-effect waves-light btn purple lighten-1">
        <i class="material-icons">arrow_back</i>
        Regresar a la lista
      </router-link>
    </div>

    <div class="row">
      <form @submit.prevent="createProject" class="col s12 l10">
        <div class="row">
          <div class="input-field col s12 l6">
            <input
              id="first_name"
              type="text"
              v-model="project.title"
              class="validate"/>
            <label for="first_name">Nombre De La Tarea</label>
          </div>
          <div class="input-field col s12 l6">
            <input
              id="last_name"
              type="text"
              v-model="project.responsable"
              class="validate"/>
            <label for="last_name">Responsable</label>
          </div>
          <div class="input-field col s12 ">
            <input
              id="descripcion"
              v-model="project.description"
              type="text"
              class="validate"/>
            <label for="descripcion">Descripción De La Tarea</label>
          </div>
            <div class="col-s12-l6">
           <h5>Lenguajes</h5>
          <p>
            <label>
              <input
                type="checkbox"
                v-model="project.langs"
                value="html"
                checked="checked"
              />
              <span>HTML</span>
            </label>
          </p>

          <p>
            <label>
              <input
                type="checkbox"
                v-model="project.langs"
                value="css"
                checked="checked"
              />
              <span>CSS</span>
            </label>
          </p>

          <p>
            <label>
              <input
                type="checkbox"
                v-model="project.langs"
                value="js"
                checked="checked"
              />
              <span>JavaScript</span>
            </label>
          </p>
             <p>
            <label>
              <input
                type="checkbox"
                v-model="project.langs"
                value="typescript"
                checked="checked"
              />
              <span>Typescript</span>
            </label>
          </p>

          <p>
            <label>
              <input
                type="checkbox"
                v-model="project.langs"
                value="Java"
                checked="checked"
              />
              <span>Java</span>
            </label>
          </p>
             <p>
            <label>
              <input
                type="checkbox"
                v-model="project.langs"
                value="PHP"
                checked="checked"
              />
              <span>PHP</span>
            </label>
          </p>
             <p>
            <label>
              <input
                type="checkbox"
                v-model="project.langs"
                value="python"
                checked="checked"
              />
              <span>Python</span>
            </label>
          </p>

         </div>
         
         <div class="col-s12-l6"> <!-- prioridades -->
         <h5>Prioridad de la Tarea</h5>
          <p>
            <label>
              <input
                type="checkbox"
                v-model="project.prioridad"
                value="Muy Importante"
                checked="checked"
              />
              <span>Muy Importante</span>
            </label>
          </p>
           <p>
            <label>
              <input
                type="checkbox"
                v-model="project.prioridad"
                value="Importante"
                checked="checked"
              />
              <span>Importante</span>
            </label>
          </p>
           <p>
            <label>
              <input
                type="checkbox"
                v-model="project.prioridad"
                value="Poco Importante"
                checked="checked"
              />
              <span>Poco Importante</span>
            </label>
          </p>
          </div>

       <div class="col-s12-l6"> <!-- estado -->
         <h5>Estado de la Tarea</h5>
          <p>
            <label>
              <input
                type="checkbox"
                v-model="project.estado"
                value="En Curso"
                checked="checked"
              />
              <span>En Curso</span>
            </label>
          </p>
           <p>
            <label>
              <input
                type="checkbox"
                v-model="project.estado"
                value="Finalizada"
                checked="checked"
              />
              <span>Finalizada</span>
            </label>
          </p>
         </div>
       
          <button
            class="btn waves-effect waves-light col s12  purple darken-4"
            type="submit"
            name="action">
            Guardar
            <i class="material-icons right">send</i>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import router from '../router';

const showAlert = () =>{
     Swal.fire({
        title: 'Estas seguro de volver?',
        text: "Quiere agregar mas tareas",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, quiero seguir agregando!'
      }).then((result) => {
        if (!result.isConfirmed) {
          Swal.fire(
            'Tu tarea fue agregada',
             router.push("proyectos")
            
          )
        }else{
          router.push("/reg-projects")
         
        }
      })
}


export default {
  data() {
    return {
      project: {
        title: "",
        description: "",
        responsable: "",
        langs: [],
        prioridad: [],
        estado:[],
        status: true,
      },
    };
  },
  methods: {
    async createProject() {
      const user = JSON.parse(localStorage.getItem("user"));

      await fetch(
        `https://vue-js-a4fb6-default-rtdb.firebaseio.com/projects/${user.localId}.json?auth=${user.idToken}`,
        {
          method: "POST",
          body: JSON.stringify(this.project),
        }
      );
      showAlert()                
    },
  },
};
</script>

<style>
.caja{
  margin-top: 20px;

}
</style>


