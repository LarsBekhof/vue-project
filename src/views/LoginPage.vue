<template>
  <main class="center-content">
    <LoginForm />
  </main>
</template>

<script>
import { defineComponent } from 'vue';
import { LoginForm } from '../components';

export default defineComponent({
  name: 'LoginPage',
  components: { LoginForm },
  setup() {},
})
</script>

<style scoped>
main {
  height: 100%;
}
</style>
