import clsx from "clsx";
import styles from "./Cart.module.css";
import CartItemCard from "../../ui/cards/CartItemCard/CartItemCard";
import { useFoodStore } from "../../../stores/food-store";

function Cart() {
  const carts = useFoodStore((state) => state.cart);

  return (
    <div className={clsx(styles.cart, "card")}>
      {carts.length === 0 ? (
        <div>سبد شما خالی میبابشد</div>
      ) : (
        carts.map((cart) => <CartItemCard key={cart.id} item={cart} />)
      )}
    </div>
  );
}

export default Cart;
