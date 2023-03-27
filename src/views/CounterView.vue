<script setup>
import {counter} from '@/store/counterStore.js';
</script>

<template>
  <div>
    <p>{{counter.count}}</p>

    <button @click="counter.count ++">Increment</button>
  </div>
</template>