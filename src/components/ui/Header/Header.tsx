import clsx from "clsx";
import Actions from "./fragments/Actions/Actions";
import Logo from "./fragments/Logo/Logo";
import Navbar from "./fragments/Navbar/Navbar";
import styles from "./Header.module.css";
import IconButton from "../../shared/IconButton/IconButton";
import MingcuteAlignJustifyLine from "../../../icons/MingcuteAlignJustifyLine";
import HeaderProvider from "../../../providers/HeaderProvider";
import { use } from "react";
import { HeaderContext } from "../../../context/HeaderContext";
import MingcuteCloseLine from "../../../icons/MingcuteCloseLine";
import MobileNavbar from "./fragments/MobileNavbar/MobileNavbar";

import { useGetAllCategories } from "../../../services/hooks/category/useGetAllCategories";
import type { CategoryType } from "../../../types/category-type";
import useScrollAnimation from "../../../hooks/useScrollAnimation";

function Header() {
  const { data: categories } = useGetAllCategories();
  return (
    <HeaderProvider>
      <HeaderComponents categories={categories!} />
    </HeaderProvider>
  );
}

export default Header;
type Props = {
  categories: CategoryType[];
};

function HeaderComponents({ categories }: Props) {
  const containerRef = useScrollAnimation();

  const { toggleOpen, isOpen } = use(HeaderContext);

  return (
    <header ref={containerRef} className={clsx(styles.header, "container")}>
      <IconButton className={styles.icons} onClick={toggleOpen}>
        {isOpen === "open" ? (
          <MingcuteCloseLine />
        ) : (
          <MingcuteAlignJustifyLine />
        )}
      </IconButton>
      <div className={clsx("animate", "slide-right")}>
        <Logo />
      </div>
      <div className={clsx("animate", "fade-down")}>
        <Navbar categories={categories!} />
      </div>

      <MobileNavbar categories={categories!} />

      <div className={clsx("animate", "slide-left")}>
        <Actions />
      </div>
    </header>
  );
}
