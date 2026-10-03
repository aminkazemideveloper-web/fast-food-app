import clsx from "clsx";
import type { CategoryProductsType } from "../../../../../types/category-product-type";
import CategoryCard from "../../../../ui/cards/CategoryCard/CategoryCard";

import "swiper/css";

import styles from "./Categories.module.css";

type Props = {
  categories: CategoryProductsType[];
};

function Categories({ categories }: Props) {
  return (
    <section className={clsx(styles.wrapper, "container")}>
      <div className={clsx(styles.categoris)}>
        <div className={styles.group}>
          {categories.map((category) => (
            <CategoryCard key={`first-${category.id}`} category={category} />
          ))}
        </div>

        <div className={styles.group}>
          {categories.map((category) => (
            <CategoryCard key={`second-${category.id}`} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
