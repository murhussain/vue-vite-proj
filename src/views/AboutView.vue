<script setup>
  import { useFlash } from '../composables/useFlash';
  
  let { flash } = useFlash();
</script>


<template>
  <div class="about">
    <h1>This is an about page</h1>

    <button @click="flash('Deal Done!','It works on the about Page!')">Click Me</button>
  </div>
</template>

<style>
@media (min-width: ) 1024px{
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
