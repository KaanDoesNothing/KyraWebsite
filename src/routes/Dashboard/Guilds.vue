<template>
  <div class="lg:m-40 bg-gray-50 rounded shadow-md">
    <div class="p-5 bg-gray-900 lg:rounded text-center">
      <label>Servers</label>
    </div>
    <div class="bg-gray-300 grid lg:grid-cols-3 gap-4 lg:justify-items-center">
      <Card v-for="guild in session.guilds?.filter(guild => guild.isOwner || guild.permissions?.includes('ADMINISTRATOR'))" :key="guild.id" :text="guild.name" :to="`/dashboard/guild/${guild.id}`" :img="guild.iconURL ? `${guild.iconURL}?size=4096` : 'https://cdn.discordapp.com/embed/avatars/0.png'"></Card>
    </div>
  </div>
</template>

<script>
import Card from "../../components/dashboard/Card.vue";
import Axios from "axios";
import {api} from "../../config";
import {mapGetters} from "vuex";

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
  },
  computed: {
    ...mapGetters(["session"])
  }
}
</script>