<script setup lang="ts">
import AuthForm from './ui/form/index.vue'
</script>

<template>
  <div class="auth">
    <h1>Авторизация</h1>
    <AuthForm />
  </div>
</template>

<style lang="scss" scoped>
.auth {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
}
</style>
