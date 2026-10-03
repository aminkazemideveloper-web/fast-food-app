import { useEffect, useState } from "react";
import MingcuteArrowLeftFill from "../../../icons/MingcuteArrowLeftFill";
import styles from "./ScrollToTop.module.css";

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
        <div className={styles.scroll} onClick={handleTop}>
          <MingcuteArrowLeftFill />
        </div>
      )}
    </>
  );
}

export default ScrollToTop;
