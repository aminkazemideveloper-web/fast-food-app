import clsx from "clsx";

import styles from "./Banner.module.css";

import HeaderSection from "../../../../shared/HeaderSection/HeaderSection";
import BannerCard from "../../../../ui/cards/BannerCard/BannerCard";

import useScrollAnimation from "../../../../../hooks/useScrollAnimation";

function Banner() {
  const containerRef = useScrollAnimation({ status: "success" });

  return (
    <div className={clsx(styles.banner, "container")}>
      <HeaderSection title="پیشنهادهای ویژه" />

      <div ref={containerRef} className={styles.content}>
        <div className={clsx(styles.img1, "animate", "slide-right")}>
          <BannerCard img="./../../../../../../src/assets/images/banner/banner-1.jpg" />
        </div>
        <div
          className={clsx(styles.img2, "animate", "fade-down")}
          style={{ animationDelay: "0.3s" }}
        >
          <BannerCard img="./../../../../../../src/assets/images/banner/banner-2.jpg" />
        </div>
        <div
          className={clsx(styles.img2, "animate", "fade-up")}
          style={{ animationDelay: "0.6s" }}
        >
          <BannerCard img="./../../../../../../src/assets/images/banner/banner-3.jpg" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
