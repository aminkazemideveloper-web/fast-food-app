import clsx from "clsx";
import ErrorPage from "../../../../../pages/Error/Page";

import styles from "./Menus.module.css";
import HeaderSection from "../../../../shared/HeaderSection/HeaderSection";
import MenuCard from "../../../../ui/cards/MenuCard/MenuCard";
import { useCategoriesProducts } from "../../../../../services/hooks/products/useCategoriesProducts";

import { useEffect, useRef } from "react";
import MenusSkeleton from "../../../../skeletons/MenusSkeleton/MenusSkeleton";

function Menus() {
  const { data: categories, status } = useCategoriesProducts();
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;
    console.log("container", container);

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
  }, [status]);

  if (status === "pending") return <MenusSkeleton />;
  if (status === "error") return <ErrorPage />;
  return (
    <div ref={containerRef} className={clsx(styles.menus, "container")}>
      <HeaderSection title="منو شیلا" />
      <div className={clsx(styles.wrapper, "animate", "slide-right")}>
        {categories?.map((item) => (
          <MenuCard key={item.id} menu={item} />
        ))}
      </div>
    </div>
  );
}

export default Menus;
