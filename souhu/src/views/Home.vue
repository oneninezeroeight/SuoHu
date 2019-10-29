<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <SportLeague /> -->
    <NBAteams />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import SportLeague from "../components/Sport-League/Sport-League.vue";
import NBAteams from "../components/NBA-teams/NBA-teams.vue";

export default {
  name: "home",
  components: {
    // SportLeague
    NBAteams
  }
};
</script>
