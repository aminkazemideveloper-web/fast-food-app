import clsx from "clsx";
import Actions from "./fragments/Actions/Actions";
import Logo from "./fragments/Logo/Logo";
import Navbar from "./fragments/Navbar/Navbar";
import styles from "./Header.module.css";
import IconButton from "../../shared/IconButton/IconButton";
import MingcuteAlignJustifyLine from "../../../icons/MingcuteAlignJustifyLine";
import MingcuteCloseLine from "../../../icons/MingcuteCloseLine";
import MobileNavbar from "./fragments/MobileNavbar/MobileNavbar";
import { useGetAllCategories } from "../../../services/hooks/category/useGetAllCategories";
import useScrollAnimation from "../../../hooks/useScrollAnimation";
import { useSidebareStore } from "../../../stores/sidebar-store";

function Header() {
  const { data: categories } = useGetAllCategories();
  const containerRef = useScrollAnimation();

  const isOpen = useSidebareStore((state) => state.isOpen);
  const toggleOpen = useSidebareStore((state) => state.toggleOpen);

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

export default Header;
