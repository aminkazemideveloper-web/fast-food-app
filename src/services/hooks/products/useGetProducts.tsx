import { useQuery } from "@tanstack/react-query";
import { GetProductsRequest } from "../../api/requests/products/get-products";

export const useGetProducts = (categoryId?: number) => {
  return useQuery({
    queryKey: ["products", categoryId],
    queryFn: () => GetProductsRequest(categoryId),
  });
};
