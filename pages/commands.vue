<template>
  <div class="commands_container">
    <div v-for="command in commands" :key="command" class="command_row">
      <div class="container is-max-widescreen">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              {{command.name}}
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              <label>{{command.description}}</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import axios from "axios";
  import Vue from "vue"
  import {
    BASE_API_URL
  } from "~/config";

  export default Vue.extend({
    data() {
      return {
        commands: []
      }
    },
    mounted() {
      this.fetchCommands();
    },
    methods: {
      fetchCommands() {
        axios.get(`${BASE_API_URL}/commands`).then(res => {
          this.commands = res.data.commands;
          console.log(this.commands);
        });
      }
    }
  });

</script>

<style lang="css" scoped>
  .commands_container {
    padding-top: 5%;
    padding-left: 20%;
    padding-right: 20%;
  }

  .command_row {
    margin-top: 1%;
  }

</style>
