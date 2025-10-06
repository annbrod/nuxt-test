import { delay } from '~/shared/lib/delay'

export default defineEventHandler(async () => {

    await delay()


    return {
        products: [
            {
                id: 3,
                quantity: 1,
                title: 'Клара',
                img: {
                    src: '/images/catalog/products/vorona.jpeg'
                },
                url: '/catalog/item/1',
                price: '3300 Р',
                
            },
            {
                id: 33,
                quantity: 0,
                title: 'Василий',
                img: {
                    src: '/images/catalog/products/kot.jpg'
                },
                url: '/catalog/item/1',
                price: '366600 Р',
                
            },
            {
                id: 44,
                quantity: 0,
                title: 'Василий 2',
                img: {
                    src: '/images/catalog/products/kot.jpg'
                },
                url: '/catalog/item/1',
                price: '10 Р',
                
            },
            {
                id: 55,
                quantity: 0,
                title: 'Клара',
                img: {
                    src: '/images/catalog/products/vorona.jpeg'
                },
                url: '/catalog/item/1',
                price: '30 Р',
                
            },
        ]
    } satisfies IGetFavoritesR

})
    