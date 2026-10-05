import clsx from "clsx";

import { useComposition } from "./useCopmosition";

import BlogCard from "../../../../ui/cards/BlogCard/BlogCard";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";

import styles from "./BlogSection.module.css";
import SwipperAction from "./components/SwipperAction/SwipperAction";

function BlogSection() {
  const { blogData } = useComposition();

  return (
    <div className={clsx(styles.blog, "container")}>
      <div className={styles.wrapper}>
        <Swiper
          loop
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation
          modules={[Autoplay]}
          className={styles.swiper}
        >
          {blogData.map((blog) => (
            <SwiperSlide key={blog.id}>
              <BlogCard blog={blog} />
            </SwiperSlide>
          ))}

          <SwipperAction />
        </Swiper>
      </div>
    </div>
  );
}

export default BlogSection;
