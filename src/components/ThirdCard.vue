<template>
  <card>
    <template #left>
      <div class="text-right mr-10 mt-32 space-y-5">
        <div
          v-for="(_, index) in funds"
          :key="index"
          class="text-6xl font-extrabold text-teal opacity-30 cursor-pointer"
        >
          {{ index + 1 }}
        </div>
      </div>
    </template>
    <p class="mt-36">Team of unique combination</p>
    <div class="my-10">
      <h1 class="title">Global Intelligence</h1>
      <h1 class="title">Asian Insights</h1>
      <h1 class="title">Local Experience</h1>
    </div>
    <div class="border-white border-l border-solid pl-8 pb-20 pt-0">
      <p class="mr-20">
        We transform intelligent insights into innovative, relevant investment
        opportunities for our clients. Leveraging our unique combination of a
        global perspective complemented by our Asian DNA, we aspire to create
        sophisticated and diverse solutions that set new standards in the asset
        management industry.
      </p>
      <a href="https://www.google.com/" class="mt-3 block font-medium">
        Learn more about what makes us unique
      </a>
    </div>
  </card>
</template>

<script setup>
import Card from "./Card.vue";
import Curl from "./Curl.vue";
</script>

<script>
export default {
  data() {
    return {
      funds: [
        "Nikko AM ARK Disruptive Innovation Fund 1",
        "Nikko AM ARK Disruptive Innovation Fund 2",
        "Nikko AM ARK Disruptive Innovation Fund 3",
        "Nikko AM ARK Disruptive Innovation Fund 4",
      ],
    };
  },
};
</script>
<style scoped>
</style>
