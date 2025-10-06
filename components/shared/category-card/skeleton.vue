
<script setup lang="ts">


interface Props {
    cardClass?: string
}

defineProps<Props>()

</script>

<template>

    <NuxtLink class="category-card loading" :class="cardClass" to="">
        <h3 class="category-card__title"></h3>
        <UIPicture src='' alt  class="picture--category-card"/>
    </NuxtLink>

</template>

<style lang="scss" scoped>
@import url('./style.scss');
</style>
