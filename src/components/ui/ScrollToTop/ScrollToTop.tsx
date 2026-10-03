import { useEffect, useState } from "react";
import MingcuteArrowLeftFill from "../../../icons/MingcuteArrowLeftFill";
import styles from "./ScrollToTop.module.css";
import clsx from "clsx";
import IconButton from "../../shared/IconButton/IconButton";

function ScrollToTop() {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsShow(window.scrollY >= 250);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleTop = () => {
    const element = document.querySelector("#topToScroll");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {isShow && (
        <IconButton
          className={clsx(styles.scroll, "action")}
          onClick={handleTop}
        >
          <MingcuteArrowLeftFill />
        </IconButton>
      )}
    </>
  );
}

export default ScrollToTop;
