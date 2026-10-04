import clsx from "clsx";
import styles from "./Cart.module.css";
import CartItemCard from "../../ui/cards/CartItemCard/CartItemCard";
import { useFoodStore } from "../../../stores/food-store";
import IconButton from "../../shared/IconButton/IconButton";
import MingcuteCloseLine from "../../../icons/MingcuteCloseLine";
import MingcuteShoppingBag2Line from "../../../icons/MingcuteShoppingBag2Line";

function Cart() {
  const carts = useFoodStore((state) => state.cart);
  const toggleCart = useFoodStore((state) => state.toggleOpen);
  const isOpenCart = useFoodStore((state) => state.isOpen);
  const totalPrice = carts.reduce(
    (total, item) => total + item.qty * item.price,
    0,
  );

  const tax = totalPrice * (1 - 0.9);

  const handleToggleCartButtonClick = () => {
    toggleCart();
    if (isOpenCart) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <div className={clsx(styles.cart)}>
      <div className={styles.heading}>
        <IconButton onClick={handleToggleCartButtonClick}>
          <MingcuteCloseLine />
        </IconButton>

        <div className={styles.content}>
          <strong>{carts.reduce((total, item)=>(total + (item.qty* 1)) ,0)}</strong>
          <span>سبد خرید</span>
          <MingcuteShoppingBag2Line />
        </div>
      </div>
    <div className={styles.visual}>
          <div className={styles.wrapper}>
        {carts.length === 0 ? (
          <div>سبد شما خالی میبابشد</div>
        ) : (
          carts.map((cart) => <CartItemCard key={cart.id} item={cart} />)
        )}
      </div>

      <div className={styles.written}>
        <div>
          <p>جمع کل خرید</p>
          <b>
            {totalPrice.toLocaleString("fa-IR")}
            <span>تومان</span>
          </b>
        </div>

        <div>
          <p>جمع مالیات و عوارض</p>
          <b>
            {tax.toLocaleString("fa-IR")}
            <span>تومان</span>
          </b>
        </div>
        <div>
          <p>مبلغ قابل پرداخت</p>
          <strong>
            {(totalPrice + tax).toLocaleString("fa-IR")}
            <span>تومان</span>
          </strong>
        </div>
      </div>
    </div>
      <button className={clsx(styles.btn , "action" )}>ثبت شفارش</button>

      <div className={styles.overlay}></div>
    </div>
  );
}

export default Cart;
