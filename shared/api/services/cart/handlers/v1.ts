function method(instance: Instance) {
  return {
    getCart() {
      return instance<IGetCartR>(`/api/cart/cart/`, { method: 'GET' })
    },

    updateCart(payload: IUpdateCartP) {
      return instance<IUpdateCartR[]>(`/api/cart/update/`, { method: 'POST' , body: payload })
    },

    deleteCartItem(payload: IUpdateCartP) {
      return instance<IGetCartR>(`/api/cart/delete/`, { method: 'POST' , body: payload })
    }
  }
}

export default method
  