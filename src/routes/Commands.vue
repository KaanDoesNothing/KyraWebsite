<template>
<!--  <label v-for="command in commands">{{command.name}} <br></label>-->
</template>

<script>
import {api} from "../config";

export default {
  name: "Commands",
  data() {
    return {
      commands: []
    }
  },
  mounted() {
    this.fetchClientInfo()
  },
  methods: {
    async fetchClientInfo () {
      let res = await fetch(`${api}/client/info`).then(res => res.json());
      this.commands = res.commands;
    }
  }
}
</script>

<style scoped>

</style>