<template>
  <div class="row">
     <div class="col s12 m7">
         <card-project :data="projects"/>
  </div>
     
  </div>
</template>

<script>
import CardProject from './CardProject.vue'
export default {
  data: () => ({
      projects: null,
  }),
  components: {
       CardProject 
   },
   mounted(){
       this.getProjects()
   },
   methods: {
      async getProjects(){
          const res = await fetch("https://vue-js-a4fb6-default-rtdb.firebaseio.com/projects.json")
          const data = await res.json(); 

          this.projects= data

          console.log(data)

         
       },
   },
};
</script>

