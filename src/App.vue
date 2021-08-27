<template>
  <wave />
  <first-card />
  <second-card />
  <third-card />
</template>

<script setup>
import FirstCard from "./components/FirstCard.vue";
import SecondCard from "./components/SecondCard.vue";
import ThirdCard from "./components/ThirdCard.vue";
import Wave from "./components/Wave.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.title {
  font-size: 2.2rem;
  font-weight: 500;
  line-height: 1.3;
}
</style>
