import clsx from "clsx";
import Actions from "./fragments/Actions/Actions";
import Logo from "./fragments/Logo/Logo";

import styles from "./Header.module.css";
import IconButton from "../../shared/IconButton/IconButton";
import MingcuteAlignJustifyLine from "../../../icons/MingcuteAlignJustifyLine";
import MingcuteCloseLine from "../../../icons/MingcuteCloseLine";
import MobileNavbar from "./fragments/MobileNavbar/MobileNavbar";
import { useGetAllCategories } from "../../../services/hooks/category/useGetAllCategories";
import useScrollAnimation from "../../../hooks/useScrollAnimation";
import { useSidebareStore } from "../../../stores/sidebar-store";
import { useEffect } from "react";

function Header() {
  const { data: categories } = useGetAllCategories();
  const containerRef = useScrollAnimation();

  const isOpen = useSidebareStore((state) => state.isOpen);
  const isCollaps = useSidebareStore((state) => state.isCollaps);
  const toggleOpen = useSidebareStore((state) => state.toggleOpen);

  const handleToggleButtonClick = () => {
    toggleOpen();
  };

  useEffect(() => {
    document.body.style.overflow = isCollaps ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isCollaps]);

  return (
    <div id="topToScroll">
      <header ref={containerRef} className={clsx(styles.header, "container")}>
        <IconButton className={styles.icons} onClick={handleToggleButtonClick}>
          {isOpen === "open" ? (
            <MingcuteCloseLine />
          ) : (
            <MingcuteAlignJustifyLine />
          )}
        </IconButton>
        <Logo />
        <Actions />
      </header>

      {isOpen && <MobileNavbar categories={categories!} />}
    </div>
  );
}

export default Header;
