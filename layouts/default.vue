<template>
    <div id="main">
        <Navbar />
        <Nuxt />
    </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import Navbar from "../components/navbar.vue";

  export default Vue.extend({
    components: {
      Navbar
    },
    beforeMount() {
      this.$store.dispatch("fetch_client_info");
      
      console.log("test")
    }
  })

</script>

<style>
  html {
    background-color: #2c2f33;
  }
  .navbar {
    background-color: #23272a;
  }

  .color-white {
    color: #FFFFFF !important;
  }

  .navbar-button {
    color: #FFFFFF !important;
    background-color: transparent !important;
    text-decoration: none !important;
  }
</style>