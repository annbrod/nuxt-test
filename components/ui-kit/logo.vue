<script setup lang="ts">


const { $viewport } = useNuxtApp()
</script>

<template>
    <NuxtLink
        to="/"
        title="На главную"
        class="logo"
    >
    <picture class="logo__picture">
        <img v-if="$viewport.isLessThan('desktop')" src="/images/logo/mobile.svg" alt width="40" height="40">
        <img v-else src="/images/logo/desktop.svg" alt width="173" height="42">
    </picture>
  </NuxtLink>
</template>


<style lang="scss">
  .logo {
    display: block;
    width: 42px;
    height: 42px;
    
    &__picture {
        width: 100%;
        height: 100%;
        display: block;
        line-height: 0;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    @media(min-width: $desktop-min) {
        width: 172px;
        height: 42px;
    }
  }
</style>
