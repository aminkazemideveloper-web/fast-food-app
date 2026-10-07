import clsx from "clsx";
import HeaderSection from "../../../../shared/HeaderSection/HeaderSection";
import styles from "./VisualFood.module.css";
import ErrorPage from "../../../../../pages/Error/Page";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import ProductCard from "../../../../ui/cards/ProductCard/ProductCard";
import SwipperActions from "./components/SwipperActions/SwipperActions";
import VisualFoodSkeleton from "../../../../skeletons/VisualFoodSkeleton/VisualFoodSkeleton";
import { useVisualFood } from "./useVisualFood";

function VisualFood() {
  const { containerRef, error, pending, products } = useVisualFood();
  if (pending) return <VisualFoodSkeleton />;
  if (error) return <ErrorPage />;

  return (
    <div
      ref={containerRef}
      className={clsx(styles["visual-food"], "container")}
    >
      <div className={clsx(styles.contain, "container", "animate", "fade-up")}>
        <HeaderSection title="پیشنهاد های اقتصادی" sub="غذاهایی برای خانواده" />
        <div className={styles.wrapper}>
          <Swiper
            slidesPerView={1}
            spaceBetween={12}
            loop
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            className={styles.mySwiper}
            breakpoints={{
              400: {
                slidesPerView: 2,
                spaceBetween: 16,
                centeredSlides: false,
              },
              510: {
                slidesPerView: 2,
                spaceBetween: 12,
                centeredSlides: false,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 16,
                centeredSlides: false,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 16,
                centeredSlides: false,
              },
              1140: {
                slidesPerView: 4,
                spaceBetween: 16,
                centeredSlides: false,
              },
            }}
          >
            {products?.slice(0, 8).map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
            <div className={styles.actions}>
              <SwipperActions />
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default VisualFood;
