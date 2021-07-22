<template>
  <b-navbar class="navbar">
    <template #brand>
      <b-navbar-item tag="nuxt-link" :to="{ path: '/' }">
        <img v-if="client_info.user.displayAvatarURL" :src="client_info.user.displayAvatarURL"/>
      </b-navbar-item>
      <b-navbar-item tag="nuxt-link" :to="{ path: '/' }">
        <label class="title color-white">{{client_info.user.username}}</label>
      </b-navbar-item>
    </template>
    <template #end>
      <b-navbar-item>
        <div class="buttons">
           <b-button class="is-text navbar-button" tag="nuxt-link" :to="{ path: '/commands' }">
            Commands
          </b-button>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script lang="ts">
  import Vue from "vue";
  import {
    mapState,
    mapGetters
  } from "vuex";

  export default Vue.extend({
    computed: {
      ...mapState(["client_info"])
    }
  });

</script>
