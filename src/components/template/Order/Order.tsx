import clsx from "clsx";
import styles from "./Order.module.css";

import type { ProductType } from "../../../types/product-type";
import type { CategoryProductsType } from "../../../types/category-product-type";
import Categories from "./components/Categories/Categories";
import HeaderSection from "../../shared/HeaderSection/HeaderSection";
import ProductCard from "../../ui/cards/ProductCard/ProductCard";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";

import SubCategories from "../../shared/SubCategories/SubCategories";
import Cart from "../Cart/Cart";
import Overlay from "../../shared/Overlay/Overlay";
import { useFoodStore } from "../../../stores/food-store";

type Props = {
  products: ProductType[];
  categories: CategoryProductsType[];
};

function Order({ products, categories }: Props) {
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

  return (
    <div className={clsx(styles.orders, "container")}>
      <Categories categories={categories} />
      {isShowCategory && (
        <SubCategories categories={categories} isShow={isShowCategory} />
      )}

      {categories?.map((category) => {
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
            <HeaderSection
              title={category.title}
              sub={`${productsByCategory.length} مورد`}
            />

            <div className={styles["products-wrapper"]}>
              {productsByCategory.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </div>
          </section>
        );
      })}

      {openCart && (
        <div>
          <Cart />
          <Overlay onClose={toggleCart} />
        </div>
      )}
    </div>
  );
}

export default Order;
