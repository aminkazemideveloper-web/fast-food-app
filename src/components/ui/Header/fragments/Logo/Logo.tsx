import { Link } from "react-router";
import styles from "./Logo.module.css";
import logo from "./../../../../../assets/images/logo.jpg";
import useScrollAnimation from "../../../../../hooks/useScrollAnimation";
import clsx from "clsx";

function Logo() {
  const containerRef = useScrollAnimation();
  return (
    <Link to={"/"} className={clsx(styles.logo)}>
      <div className={styles.text}>گلبرگ</div>
      <div
        ref={containerRef}
        className={clsx(styles["img-box"], "animate", "slide-right")}
      >
        <img className={styles.img} src={logo} alt="" />
      </div>
    </Link>
  );
}

export default Logo;
