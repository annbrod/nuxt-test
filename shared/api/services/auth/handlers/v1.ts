function method(instance: Instance) {
  return {
    auth(payload: IAuthLoginP) {
      return instance<IAuthLoginP>(`/api/auth/auth/`, { method: 'POST', body: payload })
    },

    logout() {
      return instance<IAuthLoginR>(`/api/auth/logout/`, { method: 'GET' })
    },
  }
}

export default method
  