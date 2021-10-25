<template>
  <div class="card horizontal  grey lighten-2"  v-if="data.data.status">
    <div class="card-stacked">
      <div class="card-content">
        <span class="card-title">{{ data.data.title }}</span>
         <p>
          {{ data.data.responsable }}
        </p>
        <p>
          {{ data.data.description }}
        </p>
        <p>
          Tecnologías:
          <span v-for="(lang, a) in data.data.langs" :key="a">{{a < data.data.langs.length - 1 ? `${lang.toUpperCase()}, `: lang.toUpperCase()
          }}</span>
        </p>
         <p>
          Prioridad:
          <span v-for="(prioridad, x) in data.data.prioridad" :key="x">{{ x < data.data.prioridad.lengtj -1? `${prioridad.toUpperCase()},`: prioridad.toUpperCase() }}</span>
         
        </p>
         <p>
          Estado:
          <span v-for="( estado, j) in data.data. estado" :key="j">{{j < data.data. estado.length - 1 ? `${ estado.toUpperCase()}, `:  estado.toUpperCase()
          }}</span>
        </p>
      </div>
      <div class="card-action">
        <div class="row">
          <router-link
            :to="`/edit-project/${data.id}`"
            class="col s6 waves-effect waves-light btn amber darken-3">
            <i class="material-icons">edit</i>
          </router-link>
          <form @submit.prevent="deleteProject">
            <button
              type="submit"
              class="col s6 waves-effect waves-light btn red darken-3">
              <i class="material-icons">delete</i>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  props: {
    data: Object,
  },
  methods: {
    async deleteProject() {
     
      const id = this.data.id;
      const user = JSON.parse(localStorage.getItem("user"));
    
      const res = await fetch(
        `https://vue-js-a4fb6-default-rtdb.firebaseio.com/projects/${user.localId}/${id}.json?auth=${user.idToken}`,
        {
          method: "PATCH",
          body: JSON.stringify({ status: false }),
        }
      );

           
     const data = await res.json(); 
     Swal.fire({
      title: 'Estas seguro (a) de borrar la tarea?',
      text: "No podras recuperar este contenido",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si quiero eliminarla..!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.data.data.status = data["status"];                 
        Swal.fire(
          'Borrado',
          'Tu tarea fue eliminada',
          'success',         
        )
      }
    }) 
 },

    
  },
  
};
</script>


