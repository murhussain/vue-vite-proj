// eslint-disable-next-line vue/multi-word-component-names
<template>
  <h1>this is me {{ quiz.name }}</h1>
  <QuizHeader />

  <!-- <QuizQuestion /> -->

  <QuizFooter :quiz="quiz"/>
</template>

<script setup>
import QuizHeader from "@/components/Quiz/QuizHeader.vue";
// import QuizQuestion from "@/components/Quiz/QuizQuestion.vue";
import QuizFooter from "@/components/Quiz/QuizFooter.vue";
import { provide } from "vue";

let props = defineProps({ quiz: Object });

provide('quiz', props);
</script>