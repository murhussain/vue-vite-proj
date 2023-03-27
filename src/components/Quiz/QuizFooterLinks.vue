<template>
  <div>
    <h5>{{ state.name }}</h5>

    <button @click="state.name = 'New Quiz Name'">Change Name</button>

    <ul>
      <li><a href="#">Get a Job</a></li>
      <li><a href="#">Contact Us</a></li>
    </ul>
  </div>
</template>

<script setup>
import {state} from '@/store/quizStore.js';
</script>