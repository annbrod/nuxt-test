<script lang="ts" setup>
import {ELinkTypes} from "~/shared/types/constant/link";

const store = useStore(["auth", "favorites", "cart"]);

async function logout() {
  await store.auth.logout();
}

const {favorites} = storeToRefs(store.favorites);
const {cart} = storeToRefs(store.cart);

const favoritesLength = computed(() => favorites.value?.length);

const cartLength = computed(() =>
  cart.value.reduce((sum: number, item: ICartItem) => sum + item.quantity, 0)
);
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <UILogo />
        <div class="header__buttons">
          <UIButton
            title="Перейти в корзину"
            mod="icon button--count"
            :type="ELinkTypes.NUXTLINK"
            to="/cart"
          >
            <i-bug class="nuxt-icon--bug" />
            <span v-if="cartLength" class="header__count">{{
              cartLength
            }}</span>
          </UIButton>
          <UIButton
            title="Перейти в избранное"
            mod="icon button--count"
            :type="ELinkTypes.NUXTLINK"
            to="/favorites"
          >
            <i-heart class="nuxt-icon--heart" />
            <span v-if="favoritesLength" class="header__count">{{
              favoritesLength
            }}</span>
          </UIButton>
          <UIButton v-if="store.auth.role" type="button" @click="logout">
            Выйти
          </UIButton>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
@import url("../style.scss");
</style>
