<script setup lang="ts">
import ProductListFavorites from "~/components/modules/product-list-favorites/index.vue";

interface Props {
  isInner: boolean;
}

defineProps<Props>();

const store = useStore(["favorites"]);

const {products, isLoading} = storeToRefs(store.favorites);
async function clearFavorites() {
  await store.favorites.clearFavorites();
}
</script>

<template>
  <div class="favorites">
    <div class="favorites__top">
      <h1>Избранное</h1>
      <UIButton
        class="button--reverse"
        v-if="products.length"
        @click="clearFavorites"
      >
        Удалить все
      </UIButton>
    </div>
    <ProductListFavorites :cards="products" :isLoading="isLoading" />
  </div>
</template>

<style lang="scss" scoped>
.favorites {
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
