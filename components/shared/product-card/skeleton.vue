<script setup lang="ts">
interface Props {
  cardClass?: string;
}

defineProps<Props>();

const isFavorite = ref<boolean>(false);
const isInCart = ref<boolean>(false);
</script>

<template>
  <div class="product-card loading" :class="cardClass">
    <NuxtLink to="" title=""></NuxtLink>
    <UIPicture src="" alt="" class="picture--product-card" />
    <div class="product-card__content">
      <h3 class="product-card__title"></h3>
      <div></div>
      <UIButtonCounter :isInCart="isInCart" :quantity="0" />
    </div>
    <UIButton
      type="button"
      class="button--icon button--favorite"
      :class="{added: isFavorite}"
      :aria-label="isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'"
    >
      <i-heart v-if="!isFavorite" class="nuxt-icon--heart" />
      <i-heart-fill v-else class="nuxt-icon--heart" />
    </UIButton>
  </div>
</template>

<style lang="scss" scoped>
@import url("./style.scss");
</style>
