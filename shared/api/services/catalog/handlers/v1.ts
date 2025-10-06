function method(instance: Instance) {
  return {
    getCatalog(id: string) {
      return instance<IGetCatalogR>(`/api/catalog/${id ? `${id}` : 'catalog'}/`, { method: 'GET' })
    },
  }
}

export default method
  