<script setup lang="ts">
import {useProductCard} from "@/composables/product-card";

const card = ref<IProductCardDetail>();
const isLoading = computed(() => useRequestStatus(["getCatalogDetail"]));

async function getPage(id: string) {
  return await useRequest({
    key: "getCatalogDetail",
    fn: ({api}) => api.catalog.v1.getCatalogDetail(id),
    onSuccess: ({data}) => {
      card.value = data;
      return ({
        quantity,
        isInCart,
        isFavorite,
        updateFavorite,
        updateCart,
        updateCartMore,
        updateCartLess,
      } = useProductCard(card.value));
    },
    onError: ({error}) => {
      throw error;
    },
  });
}

getPage(useRoute().params.id as string);

let {
  quantity,
  isInCart,
  isFavorite,
  updateFavorite,
  updateCart,
  updateCartMore,
  updateCartLess,
} = useProductCard({
  title: "",
  img: {},
  url: "",
  id: 0,
  price: "",
  quantity: 0,
  isInCart: false,
  isFavorite: false,
} as IProductCard);
</script>
<template>
  <div class="catalog-detail">
    <div class="catalog-detail__main">
      <h3 class="catalog-detail__title" :class="{loading: isLoading}">
        {{ card?.title }}
      </h3>
      <UIButton
        v-if="$viewport.isLessThan('desktop')"
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
      <UIPicture
        :="card?.img"
        alt=""
        class="picture--product-card picture--catalog-detail"
        :class="{loading: isLoading}"
      />
    </div>

    <div class="catalog-detail__content">
      <div class="catalog-detail__buttons">
        <UIButton
          v-if="!$viewport.isLessThan('desktop')"
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
      </div>
      <div class="catalog-detail__price" :class="{loading: isLoading}">
        {{ card?.price }}
      </div>
      <UIButtonCounter
        class="button-counter--detail"
        :isInCart="isInCart"
        @cart-update="updateCart"
        @cart-more="updateCartMore"
        @cart-less="updateCartLess"
        :quantity="quantity"
      />
    </div>
    <div class="catalog-detail__additional" :class="{loading: isLoading}">
      {{ card?.text }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("./style.scss");
</style>
