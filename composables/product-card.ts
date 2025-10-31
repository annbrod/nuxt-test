export function useProductCard(card: IProductCard) {
  const store = useStore(["favorites", "cart"]);
  const {cart} = storeToRefs(store.cart);

  const product = cart.value.find((item) => item.id === +card.id) || {
    id: +card.id,
    quantity: 0,
  };
  const quantity = ref<number>(product.quantity);
  const isInCart = ref<boolean>(store.cart.checkCart(+card.id));
  const isFavorite = ref<boolean>(store.favorites.checkFavorite(+card.id));

  // Избранное
  async function updateFavorite() {
    await store.favorites.updateFavorites(+card.id);
    isFavorite.value = store.favorites.checkFavorite(+card.id);
  }

  // Корзина
  async function updateCart() {
    isInCart.value = true;
    quantity.value++;
    await store.cart.addInCart({id: +card.id, quantity: quantity.value});
  }

  async function updateCartMore() {
    quantity.value++;
    await store.cart.updateСart({id: +card.id, quantity: quantity.value});
  }

  async function updateCartLess() {
    quantity.value--;
    if (quantity.value < 1) {
      isInCart.value = false;
      await store.cart.deleteCartItem({id: +card.id, quantity: quantity.value});
    } else {
      await store.cart.updateСart({id: +card.id, quantity: quantity.value});
    }
  }

  watch(
    () => store.favorites.favorites,
    () => {
      isFavorite.value = store.favorites.checkFavorite(+card.id);
    }
  );

  return {
    quantity,
    isInCart,
    isFavorite,
    updateFavorite,
    updateCart,
    updateCartMore,
    updateCartLess,
  };
}
