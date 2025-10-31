//* --- State ----------------------------------------------- *//
interface IFavoritesState {
  products: IProductCard[];
  favorites: number[];
}

//* --- Store ----------------------------------------------- *//
export const useFavoritesStore = defineStore("favorites", {
  state: (): IFavoritesState => ({
    products: [] as IProductCard[],
    favorites: [],
  }),

  getters: {
    isLoading: () => useRequestStatus(["getFavorites"]),

    checkFavorite: (state: IFavoritesState) => {
      return (id: number): boolean => {
        return state.favorites.includes(id);
      };
    },
  },

  actions: {
    async getFavorites() {
      return await useRequest({
        key: "getFavorites",
        fn: ({api}) => api.favorites.v1.getFavorites(),
        onSuccess: ({data}) => {
          //список избранных товаров
          this.products = data.products;

          //избранные товары id
          this.favorites = data.products?.map((item) => item.id);
        },
        onError: ({error}) => {
          throw error;
        },
      });
    },

    //отправить добавленный/убранный товар и получить обновленный список id-шек избранных товаров
    async updateFavorites(payload: IUpdateFavoritesP) {
      return await useRequest({
        key: "updateFavorites",
        fn: ({api}) => api.favorites.v1.updateFavorites(payload),
        onSuccess: ({data}) => {
          this.favorites = data;
          this.getFavorites();
        },

        onError: ({error}) => {
          throw error;
        },
      });
    },

    async clearFavorites() {
      return await useRequest({
        key: "clearFavorites",
        fn: ({api}) => api.favorites.v1.clearFavorites(),
        onSuccess: ({data}) => {
          this.products = data.products;
          this.favorites = data.products?.map((item) => item.id);
        },
        onError: ({error}) => {
          throw error;
        },
      });
    },
  },
});
