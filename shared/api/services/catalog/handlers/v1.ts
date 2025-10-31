function method(instance: Instance) {
  return {
    getCatalog(id: string) {
      return instance<IGetCatalogR>(
        `/api/catalog/${id ? `${id}` : "catalog"}/`,
        {method: "GET"}
      );
    },

    getCatalogDetail(id: string) {
      return instance<IProductCardDetail>(`/api/catalog/item/${id}`, {
        method: "GET",
      });
    },
  };
}

export default method;
