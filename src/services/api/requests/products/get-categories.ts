import type { CategoryProductsType } from "../../../../types/category-product-type";
import { apiRequest } from "../../instance";

export const GetCategoriesProductsRequest = async (): Promise<
  CategoryProductsType[]
> => {
  const { data } = await apiRequest.get("/categories");
  return data;
};
