import { useEffect, useRef } from "react";
import { useCategoriesProducts } from "../../../../../services/hooks/products/useCategoriesProducts";

export const useMenus = () => {
  const { data: categories, status } = useCategoriesProducts();

  const loading = status === "pending";
  const error = status === "error";
  const success = status === "success";

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
  }, [success]);

  return {
    categories,
    error,
    loading,
    containerRef,
  };
};
