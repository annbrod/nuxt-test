import type { Instance, IService } from '~/shared/api'
import { v1 } from './handlers'

interface ICatalogMethods {
  v1: ReturnType<typeof v1>
}

function createMethods(instance: Instance) {
  return {
    v1: v1(instance),
  } satisfies ICatalogMethods
}

const service: IService = { createMethods, name: ApiNames.Catalog }

export type { ICatalogMethods }
export { service as catalogService }
