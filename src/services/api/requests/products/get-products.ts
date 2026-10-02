import type { ProductType } from "../../../../types/product-type";
import { apiRequest } from "../../instance";

export const GetProductsRequest = async (
  categoryId?: number,
): Promise<ProductType[]> => {
  const { data } = await apiRequest.get("/products", {
    params: categoryId ? { categoryId } : {},
  });

  return data;
};
