import clsx from "clsx";
import styles from "./Order.module.css";

import type { ProductType } from "../../../types/product-type";
import type { CategoryProductsType } from "../../../types/category-product-type";
import Categories from "./components/Categories/Categories";
import HeaderSection from "../../ui/HeaderSection/HeaderSection";
import ProductCard from "../../ui/cards/ProductCard/ProductCard";
import { useLocation } from "react-router";
import { useEffect } from "react";
import { useFoodStore } from "../../../stores/food-store";

type Props = {
  products: ProductType[];
  categories: CategoryProductsType[];
};

function Order({ products, categories }: Props) {
  const location = useLocation();

  const cart = useFoodStore((state) => state.cart);

  console.log(cart);

  useEffect(() => {
    const hashes = location.hash;
    if (!hashes) return;

    const element = document.querySelector(hashes);

    element?.scrollIntoView({
      behavior: "smooth",
    });
  }, [location]);

  return (
    <div className={clsx(styles.orders, "container")}>
      <Categories categories={categories} />

      {categories.map((category) => {
        const productsByCategory = products.filter(
          (product) => Number(product.categoryId) === Number(category.id),
        );

        if (productsByCategory.length === 0) {
          return null;
        }

        return (
          <section
            className={clsx(styles.order, "container")}
            id={category.slug}
            key={category.id}
          >
            <HeaderSection title={category.title} />

            <div className={styles["products-wrapper"]}>
              {productsByCategory.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default Order;
