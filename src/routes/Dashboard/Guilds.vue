<template>
  <div class="m-40 bg-gray-50 rounded shadow-md">
    <div class="p-5 bg-gray-900 rounded text-center">
      <label>Servers</label>
    </div>
    <div class=" bg-gray-300 grid justify-items-center grid-flow-col gap-4 grid-rows-1">
      <Card v-for="guild in guilds" :key="guild.id" :text="guild.name" :to="`/dashboard/guild/${guild.id}`" img="https://img.icons8.com/ios/500/FFFFFF/user--v1.png"></Card>
    </div>
  </div>
</template>

<script>
import Card from "../../components/dashboard/Card.vue";
import Axios from "axios";
import {api} from "../../config";

export default {
  components: {
    Card
  },
  data() {
    return {
      guilds: []
    }
  },
  mounted() {
    this.fetchGuilds();
  },
  methods: {
    async fetchGuilds() {
      let token = localStorage.getItem("token");

      this.guilds = (await Axios.get(`${api}/auth/getUserGuilds`, {
        headers: {
          "authorization": "Bearer " + token
        }
      })).data.guilds;
    }
  }
}
</script>