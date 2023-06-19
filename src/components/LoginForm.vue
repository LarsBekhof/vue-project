<template>
  <form class="card form">  
    <label  class="input-field">
      Email
      <input v-model="form.email" type="email" name="email" required="true" class="input" />
    </label>
    <label  class="input-field">
      Password
      <input v-model="form.password" type="password" name="password" required="true" class="input" />
    </label>
    <button
      type="submit"
      @click="login($event)">
      Login
    </button>
  </form>
</template>

<script>
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'LoginForm',
  setup() {
    const form = reactive({
      email: null,
      password: null,
    });

    const login = (event) => {
      event.preventDefault();

      fetch(`${import.meta.env.VITE_API_URL}/login`, {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify({
          email: form.email,
          password: form.password,
        }),
      });
    };

    return { form, login };
  },
})
</script>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
}
</style>
