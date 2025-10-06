<script setup lang="ts">
import ProductList from "~/components/shared/product-list/index.vue";

interface Props {
  isInner: boolean;
}

defineProps<Props>();

const store = useStore(["favorites"]);

const {products, isLoading} = storeToRefs(store.favorites);
</script>

<template>
  <div class="favorites">
    <h1>Избранное</h1>
    <ProductList :cards="products" :isLoading="isLoading" />
  </div>
</template>

<style lang="scss" scoped>
.favorites {
  @include container();
}
</style>
