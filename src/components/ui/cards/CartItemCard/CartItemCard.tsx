import clsx from "clsx";
import styles from "./CartItemCard.module.css";
import IconButton from "../../../shared/IconButton/IconButton";
import TiTleSectionItem from "../../../shared/TiTleSectionItem/TiTleSectionItem";

import MingcuteDelete2Line from "../../../../icons/MingcuteDelete2Line";
import type { CartItem } from "../../../../types/cart-item-type";
import { useFoodStore } from "../../../../stores/food-store";
import MingcuteAddFill from "../../../../icons/MingcuteAddFill";

import MingcuteMinimizeFill from "../../../../icons/MingcuteMinimizeFill";

type Props = {
  item: CartItem;
};

function CartItemCard({ item }: Props) {
  const decreaseQty = useFoodStore((state) => state.decreaseQty);
  const increaseQty = useFoodStore((state) => state.increaseQty);

  const handleDecreaseQty = (id: string) => {
    decreaseQty(id);
  };
  const handleIncreaseQty = (id: string) => {
    increaseQty(id);
  };

  return (
    <div className={clsx(styles["cart-item"], "action")}>
      <div className={styles.profile}>
        <div className={styles["img-box"]}>
          <img className={styles.img} src={item.image} alt="" />
        </div>
        <TiTleSectionItem title={item.title} sub={item.mainPrice} />
      </div>
      <div className={styles.actions}>
        <IconButton
          className={clsx(styles.info, "action")}
          onClick={() => handleIncreaseQty(item.id)}
        >
          <MingcuteAddFill />
        </IconButton>
        <span className={styles.qty}>{item.qty}</span>
        <IconButton
          className={clsx(styles.remove, "action")}
          onClick={() => handleDecreaseQty(item.id)}
        >
          {item.qty > 1 ? <MingcuteMinimizeFill /> : <MingcuteDelete2Line />}
        </IconButton>
      </div>
    </div>
  );
}

export default CartItemCard;
