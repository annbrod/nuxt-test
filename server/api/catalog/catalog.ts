import {delay} from "~/shared/lib/delay";

export default defineEventHandler(async () => {
  await delay();

  const returnedRandom = Math.random();

  if (returnedRandom >= 0.5) {
    return {
      breadcrumbs: [
        {
          title: "Главная",
          url: "/",
        },
      ],
      title: "Каталог",
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
          title: "Категория 2",
          img: {
            src: "/images/catalog/categories/popugai.jpg",
          },
          url: "/catalog/2",
        },
        {
          id: 3,
          title: "Категория 3",
          img: {
            src: "/images/catalog/categories/38-popug.jpg",
          },
          url: "/catalog/3",
        },
      ],
      products: [
        {
          id: 1,
          title: "Кеша",
          img: {
            src: "/images/catalog/products/kesha.webp",
          },
          url: "/catalog/item/1",
          price: "10 Р",
          quantity: 0,
        },
        {
          id: 2,
          title: "Василий",
          img: {
            src: "/images/catalog/products/kot.jpg",
          },
          url: "/catalog/item/1",
          price: "20 Р",
          quantity: 0,
        },
        {
          id: 3,
          title: "Клара",
          img: {
            src: "/images/catalog/products/vorona.jpeg",
          },
          url: "/catalog/item/1",
          price: "3300 Р",
          quantity: 0,
        },
      ],
    } satisfies IGetCatalogR;
  } else {
    return {
      breadcrumbs: [
        {
          title: "Главная",
          url: "/",
        },
      ],
      title: "Каталог",
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
          title: "Категория 2",
          img: {
            src: "/images/catalog/categories/popugai.jpg",
          },
          url: "/catalog/2",
        },
        {
          id: 3,
          title: "Категория 3",
          img: {
            src: "/images/catalog/categories/38-popug.jpg",
          },
          url: "/catalog/3",
        },
      ],
    } satisfies IGetCatalogR;
  }
});
