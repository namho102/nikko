<template>
  <card>
    <template #left>
      <h1>Here might be a page title</h1>
    </template>
    <div class="mt-60 mb-10">
      <h1 class="title">Progressive Solutions</h1>
      <h1 class="title">Competitive Performance</h1>
      <h1 class="title">Global Citizen with Asian DNA</h1>
    </div>
    <div class="border-gray-400 border-l border-solid pl-8 pb-20 pt-0">
      <p class="text-xl">We’re one of Asia’s largest asset managers.</p>
      <a
        href="https://www.google.com/"
        class="text-teal mt-3 block font-medium"
      >
        Learn more about who we are
      </a>
    </div>
  </card>
</template>

<script setup>
import Card from './Card.vue'
</script>

<style scoped>
</style>
