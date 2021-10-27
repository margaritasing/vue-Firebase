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
                  <input v-model="project.prioridad" name="group" value="Muy Importante" type="radio"  />
                  <span>Muy Importante</span>
                </label>
              </p>
                  <p>
                <label>
                  <input v-model="project.prioridad" name="group"  value="Importante" type="radio" />
                  <span>Importante</span>
                </label>
              </p>
              <p>
                <label>
                  <input v-model="project.prioridad" class="with-gap" name="group" value="Poco Importante" type="radio" />
                  <span>Poco Importante</span>
                </label>
              </p>
        </div>
      
         <div class="col-s12-l6"> <!-- estado -->
         <h5>Estado de la Tarea</h5>
            <p>
              <label>
                <input class="with-gap" name="estado" type="radio" value="Inicio" v-model="project.estado"/>
                <span>Inicio</span>
              </label>
            </p>
            <p>
              <label>
                <input name="estado" type="radio" value="En-Curso" v-model="project.estado"/>
                <span>En Curso</span>
              </label>
            </p>
              <p>
              <label>
                <input name="estado" type="radio" value="Finalizada" v-model="project.estado"/>
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
        title: 'Tu tarea se agrego correctamente',
        text: "Para ir a la vista principal presiona CANCEL \n de lo contrario agregar otra tarea",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Agregar otra tarea..!'
      }).then((result) => {
        if (!result.isConfirmed) {
         
          Swal.fire(
            'Tu tarea fue agregada',             
             router.push("proyectos")            
          )
        }else{
          router.push("/reg-projects"),
          form = ""         
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
        titulo: "",
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


