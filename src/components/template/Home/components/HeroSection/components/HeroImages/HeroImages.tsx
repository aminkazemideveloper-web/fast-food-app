import styles from "./HeroImages.module.css";

import heroImg from "../../../../../../../assets/images/gif-pizza-hero.jpg";
import FloatingCard from "../FloatingCard/FloatingCard";

function HeroImages() {
  return (
    <div className={styles["img-box"]}>
      <div className={styles["image-glow"]} />

      <div className={styles["image-ring"]}>
        <img className={styles.img} src={heroImg} alt="پیتزای رستوران گلبرگ" />
      </div>

      <div className={styles["floating-card"]}>
        <FloatingCard />
      </div>
    </div>
  );
}

export default HeroImages;
