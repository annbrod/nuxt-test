import { delay } from '~/shared/lib/delay'

export default defineEventHandler(async (event) => {
    let cart = [
        {
            id: 3,
            quantity: 1
        },
        {
            id: 4,
            quantity: 6
        }
    ]

    await delay()

    const data = await readBody(event)

    let sameProduct = cart.find(item => item.id === data.id)
    
    if(sameProduct) {
        let oldProductIndex = cart.indexOf(sameProduct)
        cart[oldProductIndex] = data
        return cart as IUpdateCartR[]
    } else {
        cart.push(data)
        return cart as IUpdateCartR[]
    }

})
    