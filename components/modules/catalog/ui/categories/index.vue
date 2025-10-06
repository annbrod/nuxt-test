<script setup lang="ts">
import CategoryCard from '~/components/shared/category-card/index.vue'
import CategoryCardSkeleton from '~/components/shared/category-card/skeleton.vue'


interface Props {
    cards: ICategory[],
    cardClass?: string,
    isLoading: boolean
}

defineProps<Props>()


</script>

<template>

    <div class="categories">
        <template v-if="isLoading">
            <CategoryCardSkeleton v-for="card in 3" :key="card.id" :cardClass="cardClass"/> 
        </template>
        <template v-else>
            <CategoryCard v-for="card in cards" :card="card" :key="card.id" :cardClass="cardClass"/> 
        </template>
    </div>

</template>

<style lang="scss" scoped>
.categories {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    margin-bottom: 32px;

    @media(min-width: $tablet) {
         margin-bottom: 60px;
    }
}
</style>
