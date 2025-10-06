<script setup lang="ts">


interface Props {
    card: IProductCard,
    cardClass?: string
}

const props = defineProps<Props>()

const store = useStore(['favorites', 'cart']);
const { cart } = storeToRefs(store.cart)
const product = cart.value.find(item => item.id === +props.card.id) || { id: +props.card.id, quantity: 0 }
const quantity = ref<number>(product.quantity)
const isInCart = ref<boolean>(store.cart.checkCart(+props.card.id))
const isFavorite = ref<boolean>(store.favorites.checkFavorite(+props.card.id))


async function updateFavorite() {
    await store.favorites.updateFavorites(+props.card.id)
    isFavorite.value = store.favorites.checkFavorite(+props.card.id)
}

async function updateCart() {
    isInCart.value = true
    quantity.value++
    await store.cart.updateСart({ id: +props.card.id, quantity: quantity.value })
}

async function updateCartMore() {
    quantity.value++
    await store.cart.updateСart({ id: +props.card.id, quantity: quantity.value })
}

async function updateCartLess() {
    quantity.value--
    if (quantity.value < 1) {
        isInCart.value = false
        await store.cart.deleteCartItem({ id: +props.card.id, quantity: quantity.value })

    } else {
        await store.cart.updateСart({ id: +props.card.id, quantity: quantity.value })
    }

}

watch(() => store.favorites.favorites, () => {
    isFavorite.value = store.favorites.checkFavorite(+props.card.id)
})


</script>

<template>

    <div class="product-card" :class="cardClass">
        <NuxtLink :to="card.url" :title="card.title"></NuxtLink>
        <UIPicture :="card.img" alt="" class="picture--product-card" />
        <div class="product-card__content">
            <h3 class="product-card__title">{{ card.title }}</h3>
            <div>{{ card.price }}</div>
            <UIButtonCounter :isInCart="isInCart" @cart-update="updateCart" @cart-more="updateCartMore"
                @cart-less="updateCartLess" :quantity="quantity" />
        </div>
        <UIButton @click="updateFavorite" type="button" class="button--icon button--favorite"
            :class="{ added: isFavorite }" :aria-label="isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'">
            <i-heart v-if="!isFavorite" class="nuxt-icon--heart" />
            <i-heart-fill v-else class="nuxt-icon--heart" />
        </UIButton>

    </div>

</template>

<style lang="scss" scoped>
@import url('./style.scss');
</style>
