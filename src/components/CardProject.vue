<template>
  <div class="card horizontal">
     
      <div class="card-stacked">
        <div class="card-content" v-if="data.data">
             <span class="card-title" >{{ data.data.title }}</span>
          <p >{{  data.data.description }}</p>
          <p > Responsable: {{ data.data.responsable }} </p>
          <p>Tecnologias: <span v-for="(lang , i) in data.data.langs"
          :key="i">{{ i< data.data.langs.length-1 ? `${lang},` : lang}}</span> </p>
        </div>
        <div class="card-action">
            <div class="row">
                 <router-link :to="`/edit-project`" 
                 class="col s6 waves-effect waves-light btn amber darken-3">
                 <i class="material-icons">edit</i>
                 </router-link>
                 <a class="col s6 waves-effect waves-light btn red darken-3">
                      <i class="material-icons">delete</i>
                  </a>
            </div>
           
        </div>
      </div> <i class="material-icons">add</i>
    </div>
</template>

<script>
export default {
  props: {
    data:Object,
  },
  components:{
    langs(){
      return this.data.data.langs.length
    }
  }
};
</script>

