//
export interface IGetCatalogR {
  title: string;
  categories: ICategory[];
  products?: IProductCard[];
  breadcrumbs?: IBreadcrumbs[];
}
