<script setup lang="ts">
import {useProductCard} from "@/composables/product-card";
const store = useStore(["favorites", "cart"]);
// const { cart } = storeToRefs(store.cart)

interface Props {
  card: IProductCard;
  cardClass?: string;
}

const props = defineProps<Props>();

const {
  quantity,
  isInCart,
  isFavorite,
  updateFavorite,
  updateCart,
  updateCartMore,
  updateCartLess,
} = useProductCard(props.card);

async function deleteFromCart() {
  isInCart.value = false;
  await store.cart.deleteCartItem({
    id: +props.card.id,
    quantity: quantity.value,
  });
}
</script>

<template>
  <div class="product-card" :class="cardClass">
    <NuxtLink
      class="product-card__link"
      :to="card.url"
      :title="card.title"
    ></NuxtLink>
    <UIPicture :="card.img" alt="" class="picture--product-card" />
    <div class="product-card__content">
      <h3 class="product-card__title">{{ card.title }}</h3>
      <div>{{ card.price }}</div>
      <UIButtonCounter
        :isInCart="isInCart"
        @cart-update="updateCart"
        @cart-more="updateCartMore"
        @cart-less="updateCartLess"
        :quantity="quantity"
      />
    </div>
    <div class="product-card__buttons">
      <UIButton
        @click="updateFavorite"
        type="button"
        class="button--icon button--favorite"
        :class="{added: isFavorite}"
        :aria-label="
          isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'
        "
      >
        <i-heart v-if="!isFavorite" class="nuxt-icon--heart" />
        <i-heart-fill v-else class="nuxt-icon--heart" />
      </UIButton>
      <UIButton
        @click="deleteFromCart"
        type="button"
        class="button--icon button--favorite button--cart"
        aria-label="Удалить"
      >
        <i-trash class="nuxt-icon--trash" />
      </UIButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("../style.scss");
</style>
