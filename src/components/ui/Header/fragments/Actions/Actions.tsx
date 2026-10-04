import { Link, useLocation } from "react-router";
import styles from "./Actions.module.css";

import useScrollAnimation from "../../../../../hooks/useScrollAnimation";
import clsx from "clsx";
import IconButton from "../../../../shared/IconButton/IconButton";
import MingcuteShoppingBag2Line from "../../../../../icons/MingcuteShoppingBag2Line";
import MingcuteUser1Fill from "../../../../../icons/MingcuteUser1Fill";
import { useFoodStore } from "../../../../../stores/food-store";
import { useEffect, useRef } from "react";

function Actions() {
  const containerRef = useScrollAnimation();
  const location = useLocation();
  const isShow = location.pathname.includes("/order");
  const cart = useFoodStore((state) => state.cart);
  const badgeRef = useRef<HTMLSpanElement | null>(null);
  const toggleOpenCart = useFoodStore((state) => state.toggleOpen);
  const isOpenCart = useFoodStore((state) => state.isOpen);

  useEffect(() => {
    const badge = badgeRef.current;

    if (!badge) return;

    badge.classList.remove("shake");

    void badge.offsetWidth;

    badge.classList.add("shake");
  }, [cart.length]);

  useEffect(() => {
    document.body.style.overflow = isOpenCart ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpenCart]);
  const handleToggleCartButtonClick = () => {
    toggleOpenCart();
  };

  return (
    <div
      ref={containerRef}
      className={clsx(styles.actions, "animate", "slide-left")}
    >
      {isShow ? (
        <div className={styles["shop-action"]}>
          <IconButton
            className={clsx(styles["shop-btn"], "action")}
            onClick={handleToggleCartButtonClick}
          >
            <MingcuteShoppingBag2Line />

            <span ref={badgeRef} className={clsx(styles.badge)}>
              {cart.length ?? 0}
            </span>
          </IconButton>

          <Link to="/" className={clsx("action")}>
            ورود <MingcuteUser1Fill />
          </Link>
        </div>
      ) : (
        <Link className={clsx("action")} to={"/order"}>
          سفارش آنلاین
        </Link>
      )}
    </div>
  );
}

export default Actions;
