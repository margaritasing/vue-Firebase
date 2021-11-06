<template>
  <div class="container">
    <div class="row retorno">
      <router-link
        to="/proyectos"
        class="col s12 waves-effect waves-light btn purple lighten-1">
        <i class="material-icons">arrow_back</i>
        Regresar a la lista
      </router-link>
    </div>

    <div class="row">
      <form @submit.prevent="updateProject" class="col s12 l12">
        <div class="row">
          <div class="input-field col s12 l6">
            <input
              id="first_name"
              type="text"
              v-model="project.title"
              class="validate"
              placeholder="Nombre De La Tarea"
            />
            <label for="first_name"></label>
          </div>
          <div class="input-field col s12 l6">
            <input
              id="last_name"
              type="text"
              v-model="project.responsable"
              class="validate"
              placeholder="Responsable"
            />
            <label for="last_name"></label>
          </div>
          <div class="input-field col s12">
            <input
              id="descripcion"
              v-model="project.description"
              type="text"
              class="validate"
              placeholder="Descripción De La Tarea"
            />
            <label for="descripcion"></label>
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
                value="db"
                checked="checked"
              />
              <span>MySql-Base De Datos</span>
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
            class="btn waves-effect waves-light purple darken-4 col s12"
            type="submit"
            name="action">
            Editar
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
          icon: 'success',
          title: 'Tarea actualizada',
          showConfirmButton: false,
          timer: 1500
      }).then((result) => {
        if (!result.isConfirmed) {
          router.push("/proyectos")          
        }
    })
}

export default {
  data() {
    return {
      project: {},
      id: this.$route.params.id,
    };
  },
  mounted() {
    this.getProject();
  },
  methods: {
    async getProject() {
      const user = JSON.parse(localStorage.getItem("user"));

      const res = await fetch(
        `https://vue-js-a4fb6-default-rtdb.firebaseio.com/projects/${user.localId}/${this.id}.json?auth=${user.idToken}`
      );
      const data = await res.json();

      this.project = data;
    },
    async updateProject() {
      const user = JSON.parse(localStorage.getItem("user"));

      await fetch(
        `https://vue-js-a4fb6-default-rtdb.firebaseio.com/projects/${user.localId}/${this.id}.json?auth=${user.idToken}`,
        {
          method: "PATCH",
          body: JSON.stringify(this.project),
        }
      );
      showAlert()
    },
  },
};
</script>

<style>
.retorno{
  margin-top: 20px;
}
</style>
