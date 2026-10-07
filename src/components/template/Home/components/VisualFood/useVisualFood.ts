import { useGetProducts } from "../../../../../services/hooks/products/useGetProducts";
import useScrollAnimation from "../../../../../hooks/useScrollAnimation";

export const useVisualFood = () => {
  const { data: products, status } = useGetProducts();
  const pending = status === "pending";
  const error = status === "error";

  const containerRef = useScrollAnimation({ status });

  return {
    products,
    pending,
    error,
    containerRef,
  };
};
