import styles from "./HeroSection.module.css";

import clsx from "clsx";
import useScrollAnimation from "../../../../../hooks/useScrollAnimation";

import HeroWritten from "./components/HeroWritten/HeroWritten";
import HeroImages from "./components/HeroImages/HeroImages";

function HeroSection() {
  const containerRef = useScrollAnimation({ status: "success" });

  return (
    <section ref={containerRef} className={styles.hero}>
      <div className={styles.glow} />

      <div className={clsx(styles.wrapper, "container")}>
        <div className={clsx("animate", "slide-right")}>
          <HeroWritten />
        </div>

        <div className={clsx("animate", "fade-down")}>
          <HeroImages />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
