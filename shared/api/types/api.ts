import type { FetchOptions } from 'ofetch'
import type {
  ApiNames,
  IAuthMethods,
  ICatalogMethods,
  IFavoritesMethods,
  ICartMethods
} from '~/shared/api'

// @ts-expect-error нет смысла матчить тип с ResponseType
export type FetchOption<R> = FetchOptions<R>
export type Instance = <R>(url: string, options: FetchOption<R>) => Promise<R>
export type ServiceMethods =
  IAuthMethods |
  ICatalogMethods |
  IFavoritesMethods |
  ICartMethods

export interface IApi {
  auth: IAuthMethods,
  catalog: ICatalogMethods,
  favorites: IFavoritesMethods,
  cart: ICartMethods
}
export interface IService {
  createMethods: (instance: Instance) => ServiceMethods
  name: ApiNames
}
