import clsx from "clsx";

import styles from "./Banner.module.css";

import HeaderSection from "../../../../shared/HeaderSection/HeaderSection";
import BannerCard from "../../../../ui/cards/BannerCard/BannerCard";
import ErrorPage from "../../../../../pages/Error/Page";
import { useEffect, useRef } from "react";

function Banner() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = container.querySelectorAll(".animate");

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  if (status === "pending") return <div>is pending ...</div>;
  if (status === "error") return <ErrorPage />;

  return (
    <div className={clsx(styles.banner, "container")}>
      <HeaderSection title="پیشنهادهای ویژه" />

      <div ref={containerRef} className={styles.content}>
        <div className={clsx(styles.img1, "animate", "slide-right")}>
          <BannerCard img="./../../../../../../src/assets/images/banner/banner-1.jpg" />
        </div>
        <div className={clsx(styles.img2, "animate", "fade-down")}>
          <BannerCard img="./../../../../../../src/assets/images/banner/banner-2.jpg" />
        </div>
        <div className={clsx(styles.img2, "animate", "fade-up")}>
          <BannerCard img="./../../../../../../src/assets/images/banner/banner-3.jpg" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
