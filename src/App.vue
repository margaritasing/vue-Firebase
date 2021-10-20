<template>
  <div id="nav">

    <nav-bar />

   
    <router-view/>
  </div>
  
</template>

<script>
import NavBar from "@/components/NavBar.vue"

export default {
  components: { NavBar },
  
}
</script>