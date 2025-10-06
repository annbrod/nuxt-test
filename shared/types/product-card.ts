import type {IImage} from "~/shared/types/constant/image";

export interface IProductCard {
  title: string;
  img: IImage;
  url: string;
  id: number;
  price: string;
  quantity: number;
}
