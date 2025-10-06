<script lang="ts" setup>
import Header from "~/components/shared/header/index.vue";
</script>

<template>
  <Header />
  <div class="main">
    <slot />
  </div>
</template>

<style lang="scss">
.main {
  padding: 100px 0;
}
</style>
