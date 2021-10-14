<template>
  <div class="flex justify-center my-20 flex-row items-center text-center mx-auto">
    <div class="p-30 rounded-lg shadow-lg text-center w-64" v-if="clientInfo">
      <img class="rounded-full" :src="clientInfo.displayAvatarURL">
      <h1 class="font-bold text-2xl">{{clientInfo.username}}</h1>
      <h1>
        Hi there, I'm {{clientInfo.username}}, a multi purpose Discord bot
        I'm currently in 400 guilds
      </h1>

      <button>Invite me</button>
      <br>
      <button>Invite me</button>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import {api} from "../config";

export default {
  name: "index",
  data() {
    return {
      stats: {},
      clientInfo: {
        username: "Vortex",
        displayAvatarURL: "https://cdn.discordapp.com/icons/455388508031418370/b2bdc64bc69452a793f7c34fff097a4e.webp?size=2048"
      }
    }
  },
  mounted() {
    this.fetchStats();
    this.fetchClientInfo();

    this.handleAuthentication();
  },
  methods: {
    async fetchStats () {
      let res = await fetch(`${api}/stats`).then(res => res.json());
      this.stats = res;
    },
    async fetchClientInfo () {
      let res = await fetch(`${api}/client/info`).then(res => res.json());
      this.clientInfo = res;
    },
    async fetchSession () {
      let token = localStorage.getItem("token");

      let res = await Axios.get(`${api}/auth/session`, {headers: {
          "authorization": "Bearer " + token
        }});

        if(res.data.session) {
          this.$store.commit("setSession", res.data.session);
        }
    },
    async handleAuthentication () {
      let searchParams = new URLSearchParams(window.location.search);

      if(searchParams.has("code")) {
          let res = await Axios.post(`${api}/auth/authenticate`, {code: searchParams.get("code")})

          if(res.data.token) {
            localStorage.setItem("token", res.data.token);
          }
          
          this.fetchSession();
          this.$router.push("/");
      }else if(token) {
        this.fetchSession();
      }
    }
  }
}
</script>

<style scoped>

</style>