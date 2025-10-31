export default defineNuxtRouteMiddleware((to, from) => {
  const store = useStore(["auth"]);
  const privateRoute = [ '/cart', '/favorites']

  if (privateRoute.includes(to.path) && !store.auth.role) {
    return navigateTo('/auth')
  }
})