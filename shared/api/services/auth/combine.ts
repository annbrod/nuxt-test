import type { Instance, IService } from '~/shared/api'
import { v1 } from './handlers'

interface IAuthMethods {
  v1: ReturnType<typeof v1>
}

function createMethods(instance: Instance) {
  return {
    v1: v1(instance),
  } satisfies IAuthMethods
}

const service: IService = { createMethods, name: ApiNames.Auth }

export type { IAuthMethods }
export { service as authService }
