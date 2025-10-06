<script lang="ts" setup>
const app = useAppConfig()
const store = useStore(['favorites', 'cart']);

store.favorites.getFavorites()
store.cart.getCart()

useHead(app)

</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
