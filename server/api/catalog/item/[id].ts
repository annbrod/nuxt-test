import {delay} from "~/shared/lib/delay";
export default defineEventHandler(async () => {
  await delay();
  return {
    id: 3,
    title: "Василий",
    img: {
      src: "/images/catalog/products/kot.jpg",
    },
    url: "/catalog/item/1",
    price: "20 Р",
    quantity: 1,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad deleniti
      voluptatum minima amet, facilis iure molestiae numquam debitis dolorum
      inventore, et, ratione iusto sit. Praesentium voluptas consequuntur ab
      reprehenderit aspernatur?`,
  } satisfies IProductCardDetail;
});
