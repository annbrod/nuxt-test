//* --- State ----------------------------------------------- *//
interface ICatalogState {
  title: string;
  categories: ICategory[];
  products?: IProductCard[];
  breadcrumbs?: IBreadcrumbs[];
}

//* --- Store ----------------------------------------------- *//
export const useCatalogStore = defineStore("catalog", {
  state: (): ICatalogState => ({
    title: "",
    categories: [] as ICategory[],
    products: [] as IProductCard[],
    breadcrumbs: [] as IBreadcrumbs[],
  }),

  getters: {
    isLoading: () => useRequestStatus(["getCatalog"]),
  },

  actions: {
    async getCatalog(id: string) {
      return await useRequest({
        key: "getCatalog",
        fn: ({api}) => api.catalog.v1.getCatalog(id),
        onSuccess: ({data}) => {
          this.title = data.title;
          this.categories = data.categories;
          this.products = data.products;
          this.breadcrumbs = data.breadcrumbs;
        },
        onError: ({error}) => {
          throw error;
        },
      });
    },
  },
});
