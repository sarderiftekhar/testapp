<template>
  <div class="home mt-5">
    <h2>Welcome to Vue test application</h2>
    <login-form></login-form>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'Home',
  components: {
    LoginForm
  }
}
</script>
