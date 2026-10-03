import { Link, useLocation } from "react-router";
import styles from "./Actions.module.css";

import useScrollAnimation from "../../../../../hooks/useScrollAnimation";
import clsx from "clsx";

function Actions() {
  const containerRef = useScrollAnimation();
  const location = useLocation();
  const isShow = location.pathname.includes("/order");
  console.log("isShow", isShow);

  return (
    <div
      ref={containerRef}
      className={clsx(styles.actions, "animate", "slide-left")}
    >
      {isShow && <div className={styles["theme-btn"]}>shopping</div>}
      {isShow ? (
        <Link to="/">ورود</Link>
      ) : (
        <Link className={styles.action} to={"/order"}>
          سفارش آنلاین
        </Link>
      )}
    </div>
  );
}

export default Actions;
