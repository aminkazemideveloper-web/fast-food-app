import styles from "./SwipperActions.module.css";
import IconButton from "../../../../../../shared/IconButton/IconButton";
import MingcuteArrowLeftFill from "../../../../../../../icons/MingcuteArrowLeftFill";
import clsx from "clsx";
import { useSwiper } from "swiper/react";
import MingcuteArrowRightLine from "../../../../../../../icons/MingcuteArrowRightLine";

function SwipperActions() {
  const mySwiper = useSwiper();

  return (
    <div className={styles.actions}>
      <IconButton
        className={clsx("action")}
        onClick={() => mySwiper.slidePrev()}
      >
        <MingcuteArrowRightLine />
      </IconButton>
      <IconButton
        className={clsx("action")}
        onClick={() => mySwiper.slideNext()}
      >
        <MingcuteArrowLeftFill />
      </IconButton>
    </div>
  );
}

export default SwipperActions;
