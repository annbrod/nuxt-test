<script setup lang="ts">
import type {IImage} from "~/shared/types/constant/image";

type Props = IImage;

withDefaults(defineProps<Props>(), {
  alt: "",
  srcsets: () => [],
});
</script>

<template>
  <picture class="picture">
    <template v-if="srcsets">
      <template v-for="(source, idx) in srcsets">
        <source
          v-if="source.srcset"
          :key="idx"
          :media="source.media"
          :srcset="source.srcset"
          :type="source.type"
        />
      </template>
    </template>
    <img
      :alt="alt"
      :src="src ? src : '/images/mock.svg'"
      :width="width"
      :height="height"
      :loading="loading"
    />
  </picture>
</template>

<style lang="scss">
.picture {
  display: block;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &--category-card {
    aspect-ratio: 1/1;
    width: 110px;
    height: 110px;
    border-radius: 50%;
    overflow: hidden;

    img {
      object-fit: cover;
    }
  }

  &--product-card {
    aspect-ratio: 4/3;
  }

  @media (min-width: $desktop-min) {
    &--catalog-detail {
      max-width: 70%;
    }
  }
}
</style>
