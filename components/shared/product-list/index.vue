<script setup lang="ts">
import ProductCard from '~/components/shared/product-card/index.vue'
import ProductCardSkeleton from '~/components/shared/product-card/skeleton.vue'

interface Props {
    cards?: IProductCard[],
    cardClass?: string,
    isLoading: boolean
}

defineProps<Props>()

const store = useStore(['catalog']);


</script>

<template>

    <div class="product-list">
        <template v-if="isLoading">
            <ProductCardSkeleton v-for="card in 3" :key="card.id" :cardClass="cardClass"/> 
        </template>
        <template v-else>
            <ProductCard v-for="card in cards" :card="card" :key="card.id" :cardClass="cardClass"/> 
        </template>
    </div>

</template>

<style lang="scss" scoped>
.product-list {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    padding-bottom: 32px;

    @media(min-width: $tablet) {
        padding-bottom: 60px;
    }
}

</style>
