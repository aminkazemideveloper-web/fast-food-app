import { useCategoriesProducts } from "../../services/hooks/products/useCategoriesProducts";
import { useGetProducts } from "../../services/hooks/products/useGetProducts";

export const useOrderPage = () => {
  const { data: products = [], status: productsStatus } = useGetProducts();

  const { data: categories = [], status: categoriesStatus } =
    useCategoriesProducts();

  const isLoading =
    productsStatus === "pending" || categoriesStatus === "pending";

  const isError = productsStatus === "error" || categoriesStatus === "error";

  return {
    products,
    categories,
    isLoading,
    isError,
  };
};
