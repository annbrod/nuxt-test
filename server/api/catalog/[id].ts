import {delay} from "~/shared/lib/delay";

export default defineEventHandler(async () => {
  await delay();

  return {
    breadcrumbs: [
      {
        title: "Главная",
        url: "/",
      },
      {
        title: "Каталог",
        url: "/catalog",
      },
    ],
    title: "Категория 1",
    categories: [
      {
        id: 1,
        title: "Категория 1",
        img: {
          src: "/images/catalog/categories/vinny.webp",
        },
        url: "/catalog/1",
      },
      {
        id: 2,
        title: "Категория 1",
        img: {
          src: "/images/catalog/categories/vinny.webp",
        },
        url: "/catalog/2",
      },
      {
        id: 3,
        title: "Категория 1",
        img: {
          src: "/images/catalog/categories/vinny.webp",
        },
        url: "/catalog/3",
      },
    ],
    products: [
      {
        id: 1,
        quantity: 0,
        title: "Василий",
        img: {
          src: "/images/catalog/products/kot.jpg",
        },
        url: "/catalog/item/1",
        price: "20 Р",
      },
      {
        id: 2,
        quantity: 0,
        title: "Василий",
        img: {
          src: "/images/catalog/products/kot.jpg",
        },
        url: "/catalog/item/1",
        price: "20 Р",
      },
      {
        id: 33,
        quantity: 0,
        title: "Василий",
        img: {
          src: "/images/catalog/products/kot.jpg",
        },
        url: "/catalog/item/1",
        price: "3300 Р",
      },
    ],
  } satisfies IGetCatalogR;

  // const returnedRandom = Math.random();

  // if (returnedRandom >= 0.5) {
  //     return {
  //         title: 'Категория 1',
  //         categories: [
  //             {
  //                 id: 1,
  //                 title: 'Категория 1',
  //                 img: {
  //                     src: '/images/catalog/categories/vinny.webp'
  //                 },
  //                 url: '/catalog/1'
  //             },
  //             {
  //                 id: 2,
  //                 title: 'Категория 1',
  //                 img: {
  //                     src: '/images/catalog/categories/vinny.webp'
  //                 },
  //                 url: '/catalog/2'
  //             },
  //             {
  //                 id: 3,
  //                 title: 'Категория 1',
  //                 img: {
  //                     src: '/images/catalog/categories/vinny.webp'
  //                 },
  //                 url: '/catalog/3'
  //             }
  //         ],
  //         products: [
  //             {
  //                 id: 1,
  //                 title: 'Василий',
  //                 img: {
  //                     src: '/images/catalog/products/kot.jpg'
  //                 },
  //                 url: '/catalog/item/1',
  //                 price: '20 Р',

  //             },
  //             {
  //                 id: 2,
  //                 title: 'Василий',
  //                 img: {
  //                     src: '/images/catalog/products/kot.jpg'
  //                 },
  //                 url: '/catalog/item/1',
  //                 price: '20 Р',

  //             },
  //             {
  //                 id: 33,
  //                 title: 'Василий',
  //                 img: {
  //                     src: '/images/catalog/products/kot.jpg'
  //                 },
  //                 url: '/catalog/item/1',
  //                 price: '3300 Р',

  //             }
  //         ]
  //     } satisfies IGetCatalogR
  // } else {
  //     return {
  //         title: 'Категория 1',
  //         categories: [
  //             {
  //                 id: 1,
  //                 title: 'Категория 1',
  //                 img: {
  //                     src: '/images/catalog/categories/vinny.webp'
  //                 },
  //                 url: '/catalog/1'
  //             },
  //             {
  //                 id: 2,
  //                 title: 'Категория 2',
  //                 img: {
  //                     src: '/images/catalog/categories/popugai.jpg'
  //                 },
  //                 url: '/catalog/2'
  //             },
  //             {
  //                 id: 3,
  //                 title: 'Категория 3',
  //                 img: {
  //                     src: '/images/catalog/categories/38-popug.jpg'
  //                 },
  //                 url: '/catalog/3'
  //             }
  //         ],
  //     } satisfies IGetCatalogR
  // }
});
