<script setup>
import { state } from '@/store/quizStore.js';
import Quiz from '@/components/Quiz/Quiz.vue';
</script>

<template>
  <main>
    <h2>Hello there</h2>
    <Quiz :quiz="state" />
  </main>
</template>