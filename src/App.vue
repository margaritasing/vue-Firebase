<template>
  <div id="nav">

    <nav-bar />

    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-view/>
  </div>
  
</template>

<script>
import NavBar from "@/components/NavBar.vue"

export default {
  components: { NavBar },
  
}
</script>