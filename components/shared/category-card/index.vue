<script setup lang="ts">

interface Props {
    card: ICategory,
    cardClass?: string
}

defineProps<Props>()

</script>

<template>

    <NuxtLink class="category-card" :class="cardClass" :to="card.url" :title="card.title">
        <h3 class="category-card__title">{{card.title}}</h3>
        <UIPicture :="card.img" alt  class="picture--category-card"/>
    </NuxtLink>

</template>

<style lang="scss" scoped>
@import url('./style.scss');
</style>
