import clsx from "clsx";
import styles from "./ProductCard.module.css";
import type { ProductType } from "../../../../types/product-type";

import ProductButton from "./components/ProductButton/ProductButton";
import ProductImage from "./components/ProductImage/ProductImage";
import ProductVituals from "./components/ProductVituals/ProductVituals";
import { useState } from "react";
import { useFoodStore } from "../../../../stores/food-store";

type Props = {
  product: ProductType;
};
function ProductCard({ product }: Props) {
  const [isHover, setIsHover] = useState(false);

  
  const addToCart = useFoodStore((state) => state.addToCart);

  return (
    <article
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={clsx(styles.product, "card")}
    >
      <div className={styles["img-box"]}>
        <ProductImage product={product} isHover={isHover} />
      </div>
      <div className={styles.content}>
        <ProductVituals product={product} />
        <ProductButton onAdd={addToCart} product={product} />
      </div>
    </article>
  );
}

export default ProductCard;
