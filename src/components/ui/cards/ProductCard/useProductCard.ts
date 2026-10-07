import { useState } from "react";
import { useFoodStore } from "../../../../stores/food-store";

export const useProductCard = () => {
  const [isHover, setIsHover] = useState(false);

  const addToCart = useFoodStore((state) => state.addToCart);

  const overCard = () => {
    setIsHover(true);
  };

  const exitCard = () => {
    setIsHover(false);
  };

  return {
    addToCart,
    isHover,
    overCard,
    exitCard,
  };
};
