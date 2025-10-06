import { delay } from '~/shared/lib/delay'

export default defineEventHandler(async (event) => {
    //тут статично одни и те же, поэтому можем проверить сердечки только 1 раз
    //должен возвращаться каждый раз обновленный массив с бэка
    let favorites = [3, 33, 44, 55]

    await delay()

    const id = await readBody(event)


    if(favorites.includes(id)) {

        return favorites.filter(item => item != id) satisfies number[]
    } else {
        favorites.push(id)
        return favorites satisfies number[]
    }

})
    