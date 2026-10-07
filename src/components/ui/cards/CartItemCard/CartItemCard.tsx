import clsx from "clsx";
import styles from "./CartItemCard.module.css";
import IconButton from "../../../shared/IconButton/IconButton";
import TiTleSectionItem from "../../../shared/TiTleSectionItem/TiTleSectionItem";

import MingcuteDelete2Line from "../../../../icons/MingcuteDelete2Line";
import type { CartItem } from "../../../../types/cart-item-type";

import MingcuteAddFill from "../../../../icons/MingcuteAddFill";

import MingcuteMinimizeFill from "../../../../icons/MingcuteMinimizeFill";

type Props = {
  item: CartItem;
  decrease: (id: string) => void;
  increase: (id: string) => void;
};

function CartItemCard({ item, decrease, increase }: Props) {
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
          onClick={() => increase(item.id)}
        >
          <MingcuteAddFill />
        </IconButton>
        <span className={styles.qty}>{item.qty}</span>
        <IconButton
          className={clsx(styles.remove, "action")}
          onClick={() => decrease(item.id)}
        >
          {item.qty > 1 ? <MingcuteMinimizeFill /> : <MingcuteDelete2Line />}
        </IconButton>
      </div>
    </div>
  );
}

export default CartItemCard;
