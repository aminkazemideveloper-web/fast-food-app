import clsx from "clsx";
import HeaderSection from "../../../../shared/HeaderSection/HeaderSection";
import styles from "./VisualFood.module.css";
import { useGetProducts } from "../../../../../services/hooks/products/useGetProducts";
import ErrorPage from "../../../../../pages/Error/Page";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// import { Pagination } from "swiper/modules";
import ProductCard from "../../../../ui/cards/ProductCard/ProductCard";
import SwipperActions from "./components/SwipperActions/SwipperActions";

function VisualFood() {
  const { data, status } = useGetProducts();

  if (status === "pending") return <div>loading ...</div>;
  if (status === "error") return <ErrorPage />;

  return (
    <div className={clsx(styles["visual-food"], "container")}>
      <div className={clsx(styles.contain, "container")}>
        <HeaderSection title="پیشنهاد های اقتصادی" sub="غذاهایی برای خانواده" />
        <div className={styles.wrapper}>
          <Swiper
            slidesPerView={1}
            spaceBetween={15}
            loop
            centeredSlides={false}
            pagination={{
              clickable: true,
            }}
            // modules={[Pagination]}
            className={styles.mySwiper}
            breakpoints={{
              400: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
          >
            {data.slice(0, 8).map((product) => (
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
