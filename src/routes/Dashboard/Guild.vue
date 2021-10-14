<template>
  <div class="flex flex-wrap bg-transparent w-full h-screen">
    <div class="w-2/12 bg-white rounded p-3 shadow-lg">
      <div class="flex items-center space-x-4 p-2 mb-5">
        <img v-if="guild.id" class="h-16 rounded-full" :src="`${guild.iconURL}?size=2048`">
        <div>
          <h4 v-if="guild.id" class="font-semibold text-lg text-gray-700 capitalize font-poppins tracking-wide">{{ guild.name }}</h4>
          <span class="text-sm tracking-wide flex items-center space-x-1">
              <span v-if="guild.owner" class="font-medium text-gray-600">{{ guild.owner.tag }}</span>
          </span>
        </div>
      </div>
      <ul class="text-sm">
        <li>
          <a href="#" class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 bg-gray-200 focus:shadow-outline">
            <span>Stats</span>
          </a>
        </li>
        <li class="mt-4">
          <a href="#" class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 bg-gray-200 focus:shadow-outline">
            <span>Misc</span>
          </a>
        </li>
      </ul>
    </div>

    <div class="w-9/12">
      <div class="m-10 text-gray-500">
        <label>test</label>
      </div>
    </div>
  </div>
</template>

<script>
  import Axios from "axios";
  import {api} from "../../config";

  export default {
    data() {
      return {
        path: this.$route.params.id,
        guild: {},
      }
    },
    mounted() {
      this.fetchGuild();
    },
    methods: {
      async fetchGuild() {
        let token = localStorage.getItem("token");

        let res = (await Axios.post(`${api}/auth/getGuild`, {id: this.path}, {
          headers: {
            "authorization": "Bearer " + token
          }
        })).data;

        res.guild.owner = await this.fetchUser(res.guild.ownerId);

        this.guild = res.guild;

        return;
      },
      async fetchUser(id) {
        let token = localStorage.getItem("token");

        return (await Axios.post(`${api}/auth/getUser`, {id}, {
          headers: {
            "authorization": "Bearer " + token
          },
        })).data.user;
      }
    }
  }
</script>