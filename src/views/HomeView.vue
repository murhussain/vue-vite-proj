

<script>
  import { useFlash } from '../composables/useFlash';

  export default {
    setup() {
      let { flash } = useFlash();
      return { flash };
    }
  };
</script>

<template>
  <main>
    <p>
      <button @click="flash('It works!')">Click Me</button>
    </p>
  </main>
</template>
