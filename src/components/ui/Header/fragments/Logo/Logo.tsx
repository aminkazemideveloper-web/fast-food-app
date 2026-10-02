import { Link } from "react-router";
import styles from "./Logo.module.css";
import logo from "./../../../../../assets/images/logo.jpg";

function Logo() {
  return (
    <Link to={"/"} className={styles.logo}>
      <div className={styles.text}>گلبرگ</div>
      <div className={styles["img-box"]}>
        <img className={styles.img} src={logo} alt="" />
      </div>
    </Link>
  );
}

export default Logo;
