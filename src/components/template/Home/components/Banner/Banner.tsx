import clsx from "clsx";

import styles from "./Banner.module.css";
import { useEffect, useRef } from "react";
import { useGetAllBanners } from "../../../../../services/hooks/banner/useGetAllBanners";
import HeaderSection from "../../../../shared/HeaderSection/HeaderSection";
import BannerCard from "../../../../ui/cards/BannerCard/BannerCard";
import ErrorPage from "../../../../../pages/Error/Page";

function Banner() {
  const { data, status } = useGetAllBanners();
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
      { threshold: 0.2 },
    );

    const elements = container.querySelectorAll(".animate");

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [data?.length]);

  if (status === "pending") return <div>is pending ...</div>;
  if (status === "error") return <ErrorPage />;

  return (
    <div className={clsx(styles.banner, "container")}>
      <HeaderSection title="پیشنهادهای ویژه" />

      <div ref={containerRef} className={styles.content}>
        {data?.map((banner, index) => {
          return (
            <div
              key={banner.id}
              className={clsx("animate", "slide-right")}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <BannerCard banner={banner} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Banner;
