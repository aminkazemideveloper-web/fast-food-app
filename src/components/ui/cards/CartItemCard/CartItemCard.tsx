import clsx from "clsx";
import styles from "./CartItemCard.module.css";
import IconButton from "../../../shared/IconButton/IconButton";
import TiTleSectionItem from "../../../shared/TiTleSectionItem/TiTleSectionItem";
import MingcuteInformationLine from "../../../../icons/MingcuteInformationLine";
import MingcutePencil3AiLine from "../../../../icons/MingcutePencil3AiLine";
import MingcuteDelete2Line from "../../../../icons/MingcuteDelete2Line";
import type { CartItem } from "../../../../types/cart-item-type";

type Props = {
  item: CartItem;
};

function CartItemCard({ item }: Props) {
  return (
    <div className={clsx(styles["cart-item"], "card")}>
      <div className={styles.profile}>
        <div className={styles["img-box"]}>
          <img className={styles.img} src={item.image} alt="" />
        </div>
        <TiTleSectionItem title={item.title} sub={item.mainPrice} />
      </div>
      <div className={styles.actions}>
        <IconButton className={styles.info}>
          <MingcuteInformationLine />
        </IconButton>
        <IconButton className={styles.edit}>
          <MingcutePencil3AiLine />
        </IconButton>
        <IconButton className={styles.remove}>
          <MingcuteDelete2Line />
        </IconButton>
      </div>
    </div>
  );
}

export default CartItemCard;
