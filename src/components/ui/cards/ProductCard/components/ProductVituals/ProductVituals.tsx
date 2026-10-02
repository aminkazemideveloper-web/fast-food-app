import type { ProductType } from "../../../../../../types/product-type";
import styles from "./ProductVituals.module.css";

type Props = {
  product: ProductType;
};

function ProductVituals({ product }: Props) {
  return (
    <div className={styles.written}>
      <h3 className={styles.title}>{product.title}</h3>
      {product.price ? (
        <div className={styles.salle}>
          <del className={styles.price}>
            {product.price.toLocaleString("fa-IR")}
          </del>
          <span className={styles["main-price"]}>
            {product.mainPrice.toLocaleString("fa-IR")}
          </span>
        </div>
      ) : (
        <div>{product.mainPrice}</div>
      )}
    </div>
  );
}

export default ProductVituals;
