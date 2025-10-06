<script setup lang="ts">
import {ELinkTypes} from "~/shared/types/constant/link";
interface Props {
  className: string;
  type: "button" | "submit" | "reset" | ELinkTypes.NUXTLINK | ELinkTypes.LINK;
  mod?: string;
  to?: string;
  title?: string;
}

withDefaults(defineProps<Partial<Props>>(), {
  type: "button",
});
</script>

<template>
  <template v-if="type === ELinkTypes.LINK || type === ELinkTypes.NUXTLINK">
    <a
      v-if="type === ELinkTypes.LINK"
      :href="to"
      :title="title"
      class="button"
      :class="[mod && `button--${mod}`]"
    >
      <slot />
    </a>
    <NuxtLink
      v-else-if="type === ELinkTypes.NUXTLINK"
      :to="to"
      :title="title"
      class="button"
      :class="[mod && `button--${mod}`]"
    >
      <slot />
    </NuxtLink>
  </template>
  <button
    v-else
    class="button"
    :type="type"
    :class="[className, mod && `button--${mod}`]"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button {
  display: inline-block;
  width: fit-content;
  padding: 8px 12px;
  border-radius: 8px;
  border: none;
  background-color: $color-primary;
  color: white;
  cursor: pointer;
  transition:
    background-color $animation-duration ease,
    color $animation-duration ease,
    transform $animation-duration ease;
  text-decoration: none;

  font-size: initial;
  font-family: $font-base;

  @media (hover: hover) {
    &:hover {
      background-color: $color-secondary;
    }
  }

  &--full-width {
    width: 100%;
  }

  &--input {
    background-color: transparent;
    color: $color-dark;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    font-size: 24px;
  }

  &--favorite {
    position: absolute;
    right: 20px;
    top: 20px;
    font-size: 22px;
    line-height: 1;
    padding: 4px;
    &.added {
      color: $color-error;
    }
  }

  &--icon {
    background-color: $color-white;
    border: 1px solid $color-dark;
    color: $color-black;
    @media (hover: hover) {
      &:hover {
        background-color: $color-white;
        transform: scale(1.1);
        opacity: 1;
      }
    }
  }

  &--counter {
    width: 32px;
    height: 32px;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &--count {
    position: relative;
  }
}
</style>
