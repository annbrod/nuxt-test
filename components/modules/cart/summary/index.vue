<script setup lang="ts">
interface Props {
  quantity: number;
  price: string;
}

defineProps<Props>();
</script>

<template>
  <div class="cart-summary">
    <h2 class="cart-summary__title">Итого</h2>
    <div class="cart-summary__row">
      <div class="cart-summary__field">Товаров</div>
      <div class="cart-summary__value">{{ quantity }}</div>
    </div>
    <div class="cart-summary__row">
      <div class="cart-summary__field">Сумма</div>
      <div class="cart-summary__value">{{ price }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cart-summary {
  padding: 24px;
  border-radius: 12px;
  box-shadow:
    0px 0px 2px 0px rgba(8, 31, 24, 0.1),
    0px 5px 20px 0px rgba(8, 31, 24, 0.08);

  &__row {
    display: flex;
    gap: 8px;
    align-items: center;
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__field {
    color: $color-light-text;
  }

  &__value {
    margin-left: auto;
  }
}
</style>
