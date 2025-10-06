import type { Instance, IService } from '~/shared/api'
import { v1 } from './handlers'

interface IFavoritesMethods {
  v1: ReturnType<typeof v1>
}

function createMethods(instance: Instance) {
  return {
    v1: v1(instance),
  } satisfies IFavoritesMethods
}

const service: IService = { createMethods, name: ApiNames.Favorites }

export type { IFavoritesMethods }
export { service as favoritesService }
