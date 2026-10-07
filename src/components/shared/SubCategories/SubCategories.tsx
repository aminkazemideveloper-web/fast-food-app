import clsx from "clsx";
import type { CategoryProductsType } from "../../../types/category-product-type";
import { Link } from "react-router";
import styles from "./SubCategories.module.css";

type Props = {
  categories: CategoryProductsType[];
  isShow: boolean;
};

function SubCategories({ categories, isShow }: Props) {
  return (
    <section
      className={clsx(
        styles["sub-categories"],
        isShow ? styles.show : styles.hide,
      )}
    >
      {categories.map((category) => (
        <Link
          key={category.id}
          to={`/order#${category.slug}`}
          className={styles.sub}
        >
          <div className={styles["img-box"]}>
            <img src={category.image} alt="" />
          </div>
          <strong className={styles.title}>{category.title}</strong>
        </Link>
      ))}
    </section>
  );
}

export default SubCategories;
