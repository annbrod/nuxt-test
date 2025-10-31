//* --- State ----------------------------------------------- *//
interface ICartState {
  products: IProductCard[];
  cart: ICartItem[];
}

//* --- Store ----------------------------------------------- *//
export const useCartStore = defineStore("cart", {
  state: (): ICartState => ({
    products: [] as IProductCard[],
    cart: [],
  }),

  getters: {
    isLoading: () => useRequestStatus(["getCart"]),

    checkCart: (state: ICartState) => {
      return (id: number): boolean => {
        return state.cart.some((item) => +item.id === +id);
      };
    },
  },

  actions: {
    async getCart() {
      console.log("get");
      return await useRequest({
        key: "getCart",
        fn: ({api}) => api.cart.v1.getCart(),
        onSuccess: ({data}) => {
          this.products = data.products;
          this.cart = data.products?.map((item) => item);
        },
        onError: ({error}) => {
          throw error;
        },
      });
    },

    //отправить добавленный/убранный товар и получить обновленный список id-шек товаров в корзине
    async updateСart(payload: IUpdateCartP) {
      return await useRequest({
        key: "updateCart",
        fn: ({api}) => api.cart.v1.updateCart(payload),
        onSuccess: ({data}) => {
          this.cart = data;
        },
        onError: ({error}) => {
          throw error;
        },
      });
    },

    async deleteCartItem(payload: IUpdateCartP) {
      return await useRequest({
        key: "deleteCartItem",
        fn: ({api}) => api.cart.v1.deleteCartItem(payload),
        onSuccess: ({data}) => {
          this.cart = data.products;
          this.products = data.products;
        },
        onError: ({error}) => {
          throw error;
        },
      });
    },
  },
});
