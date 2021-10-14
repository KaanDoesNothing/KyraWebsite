<template>
  <router-link :to="to" class="m-20 p-20 bg-gray-700 rounded text-center shadow-x1">
    <div class="flex items center justify-center">
      <img class="w-20" :src="img"/>
    </div>
    <div class="p-1"></div>
    <label class="font-medium"> {{ text }} </label>
  </router-link>
</template>

<script setup>
  defineProps({
    text: String,
    to: String,
    img: String
  });
</script>