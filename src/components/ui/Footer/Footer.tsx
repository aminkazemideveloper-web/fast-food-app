import clsx from "clsx";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={clsx(styles.footer)}>
      <div className={clsx(styles.wrapper, "container")}>
        <p>طراح و پیاده ساز امین کاظمی</p>
        <span className={styles.golbarg}>
          کلیه حقوق مادی و معنوی متعلق به رستوران زنجیره ای <span>گلبرگ</span> می باشد
        </span>
      </div>
    </footer>
  );
}

export default Footer;
