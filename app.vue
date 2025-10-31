<script lang="ts" setup>
const app = useAppConfig();
const store = useStore(["favorites", "cart"]);

store.favorites.getFavorites();
// store.cart.getCart();

function useGlobalCartRefresh() {
  store.cart.getCart();

  onMounted(() => {
    const interval = setInterval(
      () => {
        store.cart.getCart();
      },
      60 * 60 * 1000
    );

    onUnmounted(() => clearInterval(interval));
  });
}

useGlobalCartRefresh();

useHead(app);
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
