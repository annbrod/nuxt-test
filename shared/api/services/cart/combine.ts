import type { Instance, IService } from '~/shared/api'
import { v1 } from './handlers'

interface ICartMethods {
  v1: ReturnType<typeof v1>
}

function createMethods(instance: Instance) {
  return {
    v1: v1(instance),
  } satisfies ICartMethods
}

const service: IService = { createMethods, name: ApiNames.Cart }

export type { ICartMethods }
export { service as cartService }
