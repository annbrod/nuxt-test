<script lang="ts" setup>
import {ELinkTypes} from "~/shared/types/constant/link";

interface Props {
  breadcrumbs: IBreadcrumbs[];
  title: string;
}

defineProps<Props>();
</script>

<template>
  <div class="breadcrumbs">
    <div class="breadcrumbs__inner">
      <div
        v-for="(item, idx) in breadcrumbs"
        :key="idx"
        class="breadcrumbs__item"
      >
        <UILink
          :title="item.title"
          mod="breadcrumbs"
          :type="ELinkTypes.NUXTLINK"
          :to="item.url"
          >{{ item.title }}</UILink
        >
      </div>
      <div class="breadcrumbs__item breadcrumbs__item--last">{{ title }}</div>
    </div>
  </div>
</template>

<style lang="scss">
.breadcrumbs {
  margin-bottom: 16px;

  &__inner {
    display: flex;
    align-items: center;
    overflow-x: auto;
    flex-wrap: nowrap;

    margin-left: -16px;
    width: calc(100% + 32px);
    padding: 0 32px;

    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__item {
    padding-left: 16px;
    position: relative;

    &--last {
      opacity: 0.4;
      pointer-events: none;
    }

    &::before {
      content: "/";
      position: absolute;
      top: 50%;
      left: 5px;
      transform: translateY(-50%);
    }

    &:first-child {
      padding-left: 0;
      &::before {
        content: none;
      }
    }
  }

  @media (min-width: $desktop-min) {
    @include container();
    &__inner {
      flex-wrap: wrap;
      padding: 0;
      margin: 0;
      width: 100%;
    }
  }
}
</style>
