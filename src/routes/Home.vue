<template>
  <div id="client_info" class="font-sans h-screen w-full flex flex-row justify-center items-center" v-if="clientInfo">
    <div class="card w-96 mx-auto shadow-xl hover:shadow">
      <img class="w-48 mx-auto rounded-full -mt-20 border-white" :src="clientInfo.displayAvatarURL">
      <div class="text-center mt-2 text-3xl font-medium">{{ clientInfo.username }}</div>
      <div class="px-6 text-center mt-2">
        <p>
          Hi there, I'm {{clientInfo.username}}, a multi purpose Discord bot
          I'm currently in {{ stats.guilds }} guilds
        </p>
      </div>

      <br>
<!--      <hr class="mt-6">-->
      <div class="flex p-4">
        <a href="/invite" class="w-1/2 text-center">
          <span class="font-bold">Invite</span>
        </a>
<!--      <div class="w-0 border border-gray-300">-->

<!--      </div>-->
        <a href="/vote" class="w-1/2 text-center">
          <span class="font-bold">Vote</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import {api} from "../config";
import {mapGetters} from "vuex";

export default {
  name: "index",
  data() {
    return {
      stats: {}
    }
  },
  mounted() {
    this.fetchStats();
  },
  methods: {
    async fetchStats () {
      let res = await fetch(`${api}/client/stats`).then(res => res.json());
      this.stats = res;
    }
  },
  computed: {
    ...mapGetters(["clientInfo"])
  }
}
</script>

<style scoped>
  #client_info {
    animation: fadeIn; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 2s;
  }
</style>