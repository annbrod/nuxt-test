<script setup lang="ts">
interface Props {
  quantity: number;
  isInCart: boolean;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  "cart-update": [void];
  "cart-more": [void];
  "cart-less": [void];
}>();

function addToCart() {
  emit("cart-update");
}

function getMore() {
  emit("cart-more");
  console.log(props.quantity);
}

function getLess() {
  emit("cart-less");
}
</script>

<template>
  <UIButton
    v-if="!isInCart"
    class="button button--full-width"
    type="button"
    @click="addToCart"
  >
    Добавить в корзину
  </UIButton>
  <div v-else class="button-counter">
    <UIButton
      class="button button--icon button--counter"
      type="button"
      aria-label="Уменьшить количество"
      @click="getLess"
    >
      <i-minus class="nuxt-icon--counter nuxt-icon--minus" />
    </UIButton>
    <input
      :value="quantity"
      class="button-counter__input"
      type="text"
      name="counter"
      aria-label="Количество"
    />
    <UIButton
      class="button button--icon button--counter"
      type="button"
      aria-label="Увеличить количество"
      @click="getMore"
    >
      <i-plus class="nuxt-icon--counter nuxt-icon--plus" />
    </UIButton>
  </div>
</template>

<style lang="scss" scoped>
.button-counter {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  &__input {
    text-align: center;
    outline: none;
    border: 1px solid $color-black;
    border-radius: 12px;
    height: 32px;
  }
}
</style>
