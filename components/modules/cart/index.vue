<script setup lang="ts">
import ProductListCart from "~/components/modules/product-list-cart/index.vue";
import CartSummary from "~/components/modules/cart/summary/index.vue";
import EmptyState from "~/components/shared/empty-state/index.vue";

interface Props {
  isInner: boolean;
}

defineProps<Props>();

const store = useStore(["cart"]);
const {products, isLoading, cart} = storeToRefs(store.cart);
async function clearCart() {
  await store.cart.clearCart();
}

const getTotalQuantity = computed(() => {
  let quantity = 0;
  cart.value.forEach((item) => {
    quantity += item.quantity;
  });
  return quantity;
});

const getTotalPrice = computed(() => {
  if (!cart.value?.length || !products.value?.length) return "0 Р";

  let totalPrice = 0;

  cart.value.forEach((cartItem) => {
    const product = products.value.find((p) => p.id === cartItem.id);

    if (product?.price) {
      const itemPrice = Number(product.price.replace(/\D/g, "")) || 0;
      const itemQuantity = cartItem.quantity;
      totalPrice += itemPrice * itemQuantity;
    }
  });

  return `${totalPrice} Р`;
});
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
    <div class="cart__content">
      <template v-if="!isLoading && !products?.length">
        <EmptyState title="В корзине ничего нет" />
      </template>
      <template v-if="products.length">
        <div class="cart__main">
          <ProductListCart :cards="products" :isLoading="isLoading" />
        </div>
        <div class="cart__aside">
          <CartSummary :quantity="getTotalQuantity" :price="getTotalPrice" />
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cart {
  @include container();
  &__content {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__top {
    display: flex;
    flex-direction: column;
  }

  &__aside {
    width: 100%;
  }

  @media (min-width: $tablet) {
    &__top {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
    }
  }

  @media (min-width: $desktop-min) {
    &__content {
      flex-direction: row;
      gap: 32px;
    }

    &__aside {
      width: 250px;
    }

    &__main {
      width: calc(100% - 250px - 32px);
    }
  }
}
</style>
