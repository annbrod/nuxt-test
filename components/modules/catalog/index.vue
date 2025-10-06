<script setup lang="ts">
import Categories from "./ui/categories/index.vue";
import ProductList from "~/components/shared/product-list/index.vue";
import Breadcrumbs from "~/components/shared/breadcrumbs/index.vue";

interface Props {
  isInner: boolean;
}

defineProps<Props>();

const store = useStore(["catalog", "cart"]);
const {title, categories, products, breadcrumbs, isLoading} = storeToRefs(
  store.catalog
);
const route = useRoute();
const {id} = route.params as {id: string};
store.catalog.getCatalog(id);
</script>

<template>
  <Breadcrumbs
    v-if="breadcrumbs && breadcrumbs.length"
    :breadcrumbs="breadcrumbs"
    :title="title"
  />
  <div class="catalog">
    <h1>Каталог</h1>
    <h2 v-if="isInner" class="catalog__subtitle" :class="{loading: isLoading}">
      {{ isLoading ? "Категория" : title }}
    </h2>
    <Categories :cards="categories" :isLoading="isLoading" />
    <ProductList :cards="products" :isLoading="isLoading" />
  </div>
</template>

<style lang="scss" scoped>
.catalog {
  @include container();
  &__subtitle {
    display: inline-block;
  }
}
</style>
