<template>
  <div class="lg:m-40 bg-gray-50 rounded shadow-md">
    <div class="p-5 bg-gray-900 lg:rounded text-center">
      <label>Dashboard</label>
    </div>
    <div class=" bg-gray-300 grid lg:justify-items-center lg:grid-flow-col gap-4 grid-rows-1">
      <Card text="Manage Profile" to="/dashboard/user" img="https://img.icons8.com/ios/500/FFFFFF/user--v1.png"></Card>
      <Card text="Help" to="/dashboard/user" img="https://img.icons8.com/ios/500/FFFFFF/info--v1.png"></Card>
      <Card text="Manage Guilds" to="/dashboard/guilds" img="https://img.icons8.com/ios/500/FFFFFF/server.png"></Card>
    </div>
  </div>
</template>

<script>
  import Card from "../components/dashboard/Card.vue";

  export default {
    components: {
      Card
    }
  }
</script>