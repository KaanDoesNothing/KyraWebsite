<script>
  import Axios from "axios";
  import {api} from "./config";
  import Navbar from "./components/Navbar.vue";

  export default {
    components: {
      Navbar
    },
    mounted() {
      let token = localStorage.getItem("token");

      if(token) {
        this.fetchSession();
      }else {
        this.handleAuthentication();
      }
    },
    methods: {
      async fetchSession () {
        let token = localStorage.getItem("token");

        let res = await Axios.get(`${api}/auth/session`, {headers: {
            "authorization": "Bearer " + token
          }});

        console.log(res.data);

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
        }
      }
    }
  }
</script>

<template>
  <Navbar/>
  <router-view></router-view>
</template>