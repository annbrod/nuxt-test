<script setup lang="ts">
import ProductCardCart from "~/components/shared/product-card/cart/index.vue";
import ProductCardSkeleton from "~/components/shared/product-card/skeleton.vue";
import EmptyState from "~/components/shared/empty-state/index.vue";

interface Props {
  cards?: IProductCard[];
  cardClass?: string;
  isLoading: boolean;
}

const props = defineProps<Props>();

const store = useStore(["catalog"]);
</script>

<template>
  <div class="product-list">
    <template v-if="isLoading">
      <ProductCardSkeleton
        v-for="(card, idx) in 3"
        :key="idx"
        :cardClass="cardClass"
      />
    </template>

    <template v-if="!isLoading && cards?.length">
      <ProductCardCart
        v-for="card in cards"
        :card="card"
        :key="card.id"
        :cardClass="cardClass"
      />
    </template>
    <template v-if="!isLoading && !cards?.length">
      <EmptyState title="В корзине ничего нет" />
    </template>
  </div>
</template>

<style lang="scss" scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding-bottom: 32px;

  @media (min-width: $tablet) {
    padding-bottom: 60px;
  }
}
</style>
