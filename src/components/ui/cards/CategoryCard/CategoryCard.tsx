import styles from "./CategoryCard.module.css";
import type { CategoryProductsType } from "../../../../types/category-product-type";
import { Link } from "react-router";

type Props = {
  category: CategoryProductsType;
};

function CategoryCard({ category }: Props) {
  return (
    <Link to={`/order#${category.slug}`} className={styles.category}>
      <div className={styles["img-box"]}>
        <img src={category.image} alt="" />
      </div>

      <div className={styles.caption}>{category.title}</div>
    </Link>
  );
}

export default CategoryCard;
