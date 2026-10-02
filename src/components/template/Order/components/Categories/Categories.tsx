import clsx from "clsx";
import type { CategoryProductsType } from "../../../../../types/category-product-type";
import CategoryCard from "../../../../ui/cards/CategoryCard/CategoryCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import styles from "./Categories.module.css";

type Props = {
  categories: CategoryProductsType[];
};

function Categories({ categories }: Props) {
  return (
    <div className={clsx(styles.categories, "container")}>
      <Swiper
        slidesPerView="auto"
        spaceBetween={30}
        loop={true}
        speed={2000}
        freeMode={true}
        allowTouchMove={false}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay]}
        className={styles.swiper}
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id} className={styles.slide}>
            <CategoryCard category={category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Categories;
