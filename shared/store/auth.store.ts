
interface IAuthStore {
    login: string,
    password: string
}

interface IUserStore {
    role?: Roles | null
}

export const useAuthStore = defineStore('auth', {
    state: (): IUserStore => ({
        role: (useCookie('USER_ROLE').value) as Roles,
      }),
    getters: {
        isAuth: state => !!state.role
    },
    actions:  {
        async setUser(user: IUserStore) {
            this.role = user.role
            useCookie('USER_ROLE').value = this.role
        },

        async authUser(payload: IAuthStore) {
            return await useRequest({
                key: 'userData',
                fn: ({ api }) => api.auth.v1.auth(payload),
                onSuccess: ({ data }) => { 
                    this.setUser(data as IUserStore); 
                    return data 
                },
                onError: ({ error }) => {  throw error },
            })
        },

        async logout() {
            return await useRequest({
              key: 'logout',
              fn: ({ api }) => api.auth.v1.logout(),
              onSuccess: async () => {
                this.role = null
                useCookie('USER_ROLE').value = ''
                navigateTo('/auth')
              },
            })
          },
    }
})