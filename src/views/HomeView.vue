<script setup>
  import { useFlash } from '../composables/useFlash';
  
  let { flash } = useFlash();
</script>

<template>
  <main>
    <p>
      <button @click="flash('Yey!','It works on the home Page', 'info')">Click Me</button>
    </p>
  </main>
</template>
