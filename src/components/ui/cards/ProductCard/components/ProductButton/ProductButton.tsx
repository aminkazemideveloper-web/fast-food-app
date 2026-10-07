import clsx from "clsx";
import styles from "./ProductButton.module.css";
import { useState } from "react";
import MingcuteShoppingBag2Line from "../../../../../../icons/MingcuteShoppingBag2Line";
import Snipper from "../../../../../shared/Snipper/Snipper";
import type { ProductType } from "../../../../../../types/product-type";

type Props = {
  onAdd: (product: ProductType) => void;
  product: ProductType;
};

function ProductButton({ onAdd, product }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const handleLoadingClick = () => {
    onAdd(product);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  return (
    <button
      onClick={handleLoadingClick}
      disabled={isLoading}
      className={clsx(styles.btn, "action", isLoading && styles.loading)}
    >
      {isLoading ? (
        <div className={styles.pending}>
          <Snipper />
          در حال افزودن...
        </div>
      ) : (
        <div className={styles.pending}>
          <MingcuteShoppingBag2Line />
          افزودن
        </div>
      )}
    </button>
  );
}

export default ProductButton;
