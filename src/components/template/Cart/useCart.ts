import { useFoodStore } from "../../../stores/food-store";

export const useCart = () => {
  const carts = useFoodStore((state) => state.cart);
  const toggleCart = useFoodStore((state) => state.toggleOpen);
  const decreaseQty = useFoodStore((state) => state.decreaseQty);
  const increaseQty = useFoodStore((state) => state.increaseQty);

  const totalPrice = carts.reduce(
    (total, item) => total + item.qty * item.price,
    0,
  );

  const tax = totalPrice * (1 - 0.9);

  const handleToggleCartButtonClick = () => {
    toggleCart();
  };

  const handledecreaseQty = (id: string) => {
    decreaseQty(id);
  };
  const handleincreaseQty = (id: string) => {
    increaseQty(id);
  };
  return {
    totalPrice,
    tax,
    handleToggleCartButtonClick,
    carts,
    handledecreaseQty,
    handleincreaseQty,
  };
};
