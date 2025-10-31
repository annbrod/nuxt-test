<script setup lang="ts">
import ProductListCart from "~/components/modules/product-list-cart/index.vue";

interface Props {
  isInner: boolean;
}

defineProps<Props>();

const store = useStore(["cart"]);
const {products, isLoading} = storeToRefs(store.cart);
async function clearCart() {
  await store.cart.clearCart();
}
</script>

<template>
  <div class="cart">
    <div class="cart__top">
      <h1>Корзина</h1>
      <UIButton
        class="button--reverse"
        v-if="products.length"
        @click="clearCart"
      >
        Удалить все
      </UIButton>
    </div>

    <ProductListCart :cards="products" :isLoading="isLoading" />
  </div>
</template>

<style lang="scss" scoped>
.cart {
  @include container();

  &__top {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: $tablet) {
    &__top {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
    }
  }
}
</style>
