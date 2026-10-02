import { useQuery } from "@tanstack/react-query";
import { GetCategoriesProductsRequest } from "../../api/requests/products/get-categories";

export const useCategoriesProducts = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: GetCategoriesProductsRequest,
  });
};
