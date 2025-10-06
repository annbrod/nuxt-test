import { delay } from '~/shared/lib/delay'

export default defineEventHandler(async () => {

    await delay()


    return {
        products: [
            {
                id: 4,
                quantity: 6,
                title: 'Клара',
                img: {
                    src: '/images/catalog/products/vorona.jpeg'
                },
                url: '/catalog/item/1',
                price: '4400 Р',
                
            }
        ]
    } satisfies IGetCartR

})
    