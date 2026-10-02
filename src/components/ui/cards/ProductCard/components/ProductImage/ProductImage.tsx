import styles from "./ProductImage.module.css";
import MingcuteStarFill from "../../../../../../icons/MingcuteStarFill";
import MingcuteStarLine from "../../../../../../icons/MingcuteStarLine";
import type { ProductType } from "../../../../../../types/product-type";
import clsx from "clsx";

type Props = {
  product: ProductType;
  isHover: boolean;
};
function ProductImage({ product, isHover }: Props) {
  return (
    <div className={clsx(styles["img-box"], isHover && styles.hover)}>
      <img src={product.image} alt="" />
      <div className={styles.overlay}>
        <span className={styles.title}>{product.title}</span>
        <span className={styles.desc}>{product.description}</span>
        <span className={styles.rate}>
          {Array(Math.ceil(product.rating))
            .fill("")
            .map((_, index) => (
              <MingcuteStarFill key={index} style={{ color: "yellow" }} />
            ))}
          {Array(6 - Math.ceil(product.rating))
            .fill("")
            .map((_, index) => (
              <MingcuteStarLine style={{ color: "yellow" }} key={index} />
            ))}
        </span>
      </div>
    </div>
  );
}

export default ProductImage;
