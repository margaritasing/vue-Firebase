<template>
  <div class="row">
    <loading  v-if="load"/>
    <div class="col s12 m6 contenedor ">
      <card-project v-for="(project, i) in projects" :key="i" :data="project" />
    </div>
    
  </div>
</template>

<script>
import CardProject from "./CardProject";
import Loading from './Loading.vue';

export default {
  data: () => ({
    projects: [],
    load: true,
  }),
  components: {
    CardProject,
    Loading
    
  },
  mounted() {
    this.getProjects();
  },
  methods: {
    async getProjects() {
       this.load = true
      const user = JSON.parse(localStorage.getItem("user"));

      const res = await fetch(
        `https://vue-js-a4fb6-default-rtdb.firebaseio.com/projects/${user.localId}.json?auth=${user.idToken}`
      );
      const data = await res.json();
     

      for (let i in data) {
        this.projects.push({
          id: i,
          data: data[i],
        });
      }

       this.load =false

      
    },
  },
};
</script>




