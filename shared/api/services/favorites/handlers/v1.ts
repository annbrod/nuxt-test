function method(instance: Instance) {
  return {
    getFavorites() {
      return instance<IGetFavoritesR>(`/api/favorites/favorites/`, {
        method: "GET",
      });
    },

    updateFavorites(payload: IUpdateFavoritesP) {
      return instance<number[]>(`/api/favorites/update/`, {
        method: "POST",
        body: payload,
      });
    },

    clearFavorites() {
      return instance<IGetFavoritesR>(`/api/favorites/clear/`, {
        method: "POST",
      });
    },
  };
}

export default method;
