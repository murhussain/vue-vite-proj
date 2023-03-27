<script setup>
import { useCounterStore } from '@/store/CounterStore.js';

let counter = useCounterStore();
</script>

<template>
  <div>
    <p>{{counter.count}}</p>

    <button @click="counter.count ++">Increment</button>
  </div>
</template>