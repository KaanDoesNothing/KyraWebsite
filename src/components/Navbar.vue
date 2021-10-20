<template>
  <nav class="flex flex-wrap items-center justify-between bg-gray-800 shadow-md">
    <div class="flex flex-shrink-0 items-center text-white">
      <router-link to="/" class="font-medium text-xl m-3">Vortex</router-link>
    </div>

    <div class="flex flex-wrap items-center text-white mx-6">
      <router-link to="/commands" class="bg-gray-700 rounded-full p-1 px-4 m-2">Commands</router-link>
      <a v-if="oauth_info && !session.id" :href="oauth_info.link" class="bg-gray-700 rounded-full p-1 px-4">Login</a>
      <router-link v-if="session.id" to="/dashboard" class="bg-gray-700 rounded-full p-1 px-4">Logged in as {{session.username}}</router-link>
    </div>
  </nav>
</template>

<script>
import Axios from "axios";
import {mapGetters} from "vuex";
import {api} from "../config";

export default {
  name: "Navbar",
  data() {
    return {
      oauth_info: undefined
    }
  },
  async mounted() {
    let authInfo = (await Axios.get(`${api}/auth/info`)).data;

    this.oauth_info = authInfo;
  },
  computed: {
    ...mapGetters(["session"])
  }
}
</script>

<style scoped>

</style>