<script setup lang="ts">
import ProductListCart from "~/components/modules/product-list-cart/index.vue";

interface Props {
  isInner: boolean;
}

defineProps<Props>();

const store = useStore(["cart"]);
const {products, isLoading} = storeToRefs(store.cart);
</script>

<template>
  <div class="cart">
    <h1>Корзина</h1>
    <ProductListCart :cards="products" :isLoading="isLoading" />
  </div>
</template>

<style lang="scss" scoped>
.cart {
  @include container();
}
</style>
