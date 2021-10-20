<template>
  <router-link :to="to" class="card m-5 p-20 bg-gray-700 rounded text-center shadow-x1">
    <div class="flex items center justify-center">
      <img class="w-20" :class="{'rounded-full': (img.includes('discord'))}" :src="img"/>
    </div>
    <div class="p-1"></div>
    <div class="rounded m-1">
      <label class="font-medium"> {{ text }} </label>
    </div>
  </router-link>
</template>

<script setup>
  defineProps({
    text: String,
    to: String,
    img: String
  });
</script>

<!--<style scoped>-->
<!--  .card {-->
<!--    background-size: cover;-->
<!--    background-repeat: no-repeat;-->
<!--    background-position: center center;-->
<!--  }-->
<!--</style>-->