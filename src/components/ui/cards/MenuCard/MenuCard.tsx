import { Link } from "react-router";
import type { CategoryProductsType } from "../../../../types/category-product-type";
import styles from "./MenuCard.module.css";

type Props = {
  menu: CategoryProductsType;
};

function MenuCard({ menu }: Props) {
  return (
    <Link to={`/order#${menu.slug}`} className={styles["menu-card"]}>
      <div className={styles["img-box"]}>
        <img src={menu.image} alt="" />
      </div>
      <h5 className={styles.title}>{menu.title.slice(0, 14)}</h5>
    </Link>
  );
}

export default MenuCard;
