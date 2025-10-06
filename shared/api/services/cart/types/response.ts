//
export interface IGetCartR {
    products: IProductCard[]
}

export interface IUpdateCartR {
    id: number,
    quantity: number
}
