import { useLocation } from "react-router";
import { useFoodStore } from "../../../stores/food-store";
import { useEffect, useMemo, useState } from "react";
import type { ProductType } from "../../../types/product-type";
import type { CategoryProductsType } from "../../../types/category-product-type";

type Props = {
  products: ProductType[];
  categories: CategoryProductsType[];
};

export const useOrder = ({ categories, products }: Props) => {
  const location = useLocation();
  const openCart = useFoodStore((state) => state.isOpen);
  const toggleCart = useFoodStore((state) => state.toggleOpen);
  const [isShowCategory, setIsShowCategory] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsShowCategory(window.scrollY >= 250);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const hashes = location.hash;
    if (!hashes) return;

    const element = document.querySelector(hashes);

    element?.scrollIntoView({
      behavior: "smooth",
    });
  }, [location]);

  const categoriesWithProducts = useMemo(() => {
    return categories
      .map((category) => {
        const productsByCategory = products.filter(
          (product) => Number(product.categoryId) === Number(category.id),
        );

        return {
          category,
          products: productsByCategory,
        };
      })
      .filter(({ products }) => products.length > 0);
  }, [products, categories]);

  return {
    openCart,
    toggleCart,
    isShowCategory,
    categoriesWithProducts,
  };
};
