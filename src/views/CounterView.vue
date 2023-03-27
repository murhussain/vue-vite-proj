<script setup>
import { useCounterStore } from '@/store/CounterStore.js';

let counter = useCounterStore();
</script>

<template>
  <div>
    <p>{{counter.count}}</p>

    <button 
      @click="counter.increment"
      :disabled="! counter.remaining"
    >
      Increment ({{counter.remaining}}) Remaining
    </button>
  </div>
</template>