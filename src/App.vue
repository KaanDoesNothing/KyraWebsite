<script>
  import Axios from "axios";
  import {api} from "./config";
  import Navbar from "./components/Navbar.vue";

  export default {
    components: {
      Navbar
    },
    mounted() {
      this.handleAuthentication();
    },
    methods: {
      async handleAuthentication() {
        let searchParams = new URLSearchParams(window.location.search);

        let token = localStorage.getItem("token");

        if (searchParams.has("code") && !token) {
          let res = await Axios.post(`${api}/auth/authenticate`, {code: searchParams.get("code")})

          if (res.data.token) {
            localStorage.setItem("token", res.data.token);
          }

          // await this.$router.push("/");

          // window.location.href = "/";
        } else if (token) {
          let res = await Axios.get(`${api}/auth/session`, {
            headers: {
              "authorization": "Bearer " + token
            }
          });

          if (res.data.session) {
            this.$store.commit("setSession", res.data.session);
          }
        }
      }
    }
  }
</script>

<template>
  <Navbar/>
  <router-view></router-view>
</template>