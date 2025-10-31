import type {IImage} from "~/shared/types/constant/image";

//
export interface IGetCatalogR {
  title: string;
  categories: ICategory[];
  products?: IProductCard[];
  breadcrumbs?: IBreadcrumbs[];
}

export interface IProductCardDetail {
  id: number;
  title: string;
  img: IImage;
  url: string;
  price: string;
  quantity: number;
  text?: string;
}
