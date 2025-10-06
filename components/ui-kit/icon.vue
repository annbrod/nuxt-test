<script lang="ts">
export default {
  props: {
    filled: {
      type: Boolean,
      required: false,
      default: false,
    },
    fontControlled: {
      type: Boolean,
      required: false,
      default: true,
    },
    icon: {
      type: Object,
      required: true,
    },
    name: {
      type: String,
      required: false,
    },
  },
};
</script>

<template>
  <component
    :is="icon"
    :class="{
      'nuxt-icon': fontControlled,
      'nuxt-icon--fill': !filled,
    }"
  />
</template>

<style lang="scss">
.nuxt-icon {
  width: 1em;
  height: 1em;
  vertical-align: middle;
  flex-shrink: 0;

  &--counter {
    width: 14px;
    height: 14px;
  }
}

.nuxt-icon--fill,
.nuxt-icon--fill * {
  fill: currentColor;
}

.cross {
  &--xs {
    font-size: 16px !important;
  }

  &--sm {
    font-size: 24px !important;
  }
}
</style>
