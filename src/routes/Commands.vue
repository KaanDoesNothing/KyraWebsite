<template>
  <div class="m-5 lg:m-40">
<!--    <input class="m-5 p-2 rounded w-full">-->
    <div v-for="command in commands" class="bg-gray-600 p-1 rounded-xl m-5">
      <div class="flex flex-wrap items-center justify-between">
        <div class="m-5 flex flex-shrink-0 items-center text-white">
          <label class="font-medium font-sans">{{command.name}}</label>
        </div>

        <div class="flex flex-wrap items-center mx-5">
          <button class="rounded-xl bg-gray-700 p-2" @click="show(command.name)">{{ isCommandVisible(command.name) ? "Hide" : "Show" }}</button>
        </div>
      </div>

      <div class="m-5 ml-10" v-if="isCommandVisible(command.name)">
        - <label class="font-small font-sans">Category: {{command.category}} </label>
        <br>
        - <label class="font-small font-sans">Aliases: {{command.aliases.length > 0 ? command.aliases.join(", ") : "None"}}</label>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";

import {api} from "../config";

export default {
  name: "Commands",
  setup() {
    let commands = ref([]);
    let openedCommands = ref([]);

    async function fetchClientInfo () {
      let res = await fetch(`${api}/client/info`).then(res => res.json());
      commands.value = res.commands;
    }

    function show(commandName) {
      let opened = openedCommands.value[commandName];

      if(opened) {
        openedCommands.value[commandName] = false;
      }else {
        openedCommands.value[commandName] = true;
      }
    }

    function isCommandVisible(commandName) {
      return openedCommands.value[commandName] === true;
    }

    fetchClientInfo();

    return {commands, openedCommands, show, isCommandVisible};
  }
}
</script>

<style scoped>

</style>