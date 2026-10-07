import clsx from "clsx";
import styles from "./Order.module.css";

import type { ProductType } from "../../../types/product-type";
import type { CategoryProductsType } from "../../../types/category-product-type";
import Categories from "./components/Categories/Categories";
import HeaderSection from "../../shared/HeaderSection/HeaderSection";
import ProductCard from "../../ui/cards/ProductCard/ProductCard";

import SubCategories from "../../shared/SubCategories/SubCategories";
import Cart from "../Cart/Cart";
import Overlay from "../../shared/Overlay/Overlay";

import { useOrder } from "./useOrder";

type Props = {
  products: ProductType[];
  categories: CategoryProductsType[];
};

function Order({ products, categories }: Props) {
  const { categoriesWithProducts, isShowCategory, openCart, toggleCart } =
    useOrder({ products, categories });

  return (
    <div className={clsx(styles.orders, "container")}>
      <Categories categories={categories} />
      {isShowCategory && (
        <SubCategories categories={categories} isShow={isShowCategory} />
      )}

      {categoriesWithProducts.map(({ category, products }) => (
        <section
          className={clsx(styles.order, "container")}
          id={category.slug}
          key={category.id}
        >
          <HeaderSection
            title={category.title}
            sub={`${products.length} مورد`}
          />

          <div className={styles["products-wrapper"]}>
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </section>
      ))}

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
