<script setup>
import { state } from '@/store/quizStore.js';
import Quiz from '@/components/Quiz/Quiz.vue';
</script>

<template>
  <main>
    <Quiz :quiz="state" />
  </main>
</template>