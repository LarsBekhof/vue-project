<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  components: { RouterView },
});
</script>

<style>
html {
  height: 100%;
}

body {
  margin: 0;
  height: 100%;
  width: 100%;
}

#app {
  height: 100%;
}
</style>
