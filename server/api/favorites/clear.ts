import {delay} from "~/shared/lib/delay";

export default defineEventHandler(async () => {
  await delay();

  return {
    products: [],
  } satisfies IGetFavoritesR;
});
