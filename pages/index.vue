<script setup lang="ts">
import MainPage from "~/components/modules/main-page/index.vue";

definePageMeta({
  middleware: [
    () => {
      const store = useStore(["auth"]);
      if (!store.auth.role) {
        return navigateTo("/auth");
      }
    },
  ],
});
</script>

<template>
  <MainPage />
</template>

<style lang="scss" scoped></style>
