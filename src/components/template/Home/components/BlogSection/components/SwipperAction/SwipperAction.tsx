import { useSwiper } from "swiper/react";
import styles from "./SwipperAction.module.css";
import MingcuteArrowLeftFill from "../../../../../../../icons/MingcuteArrowLeftFill";
import MingcuteArrowRightLine from "../../../../../../../icons/MingcuteArrowRightLine";
import clsx from "clsx";

function SwipperAction() {
  const swiperAction = useSwiper();
  return (
    <div className={styles.actions}>
      <button
        className={clsx()}
        onClick={() => swiperAction.slideNext()}
      >
        <MingcuteArrowRightLine />
      </button>
      <button
        className={clsx()}
        onClick={() => swiperAction.slidePrev()}
      >
        <MingcuteArrowLeftFill />
      </button>
    </div>
  );
}

export default SwipperAction;
