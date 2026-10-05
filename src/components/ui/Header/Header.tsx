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

import ErrorPage from "../../../pages/Error/Page";

function Header() {
  const { data: categories, status } = useGetAllCategories();
  const containerRef = useScrollAnimation();

  const isOpen = useSidebareStore((state) => state.isOpen);

  const toggleOpen = useSidebareStore((state) => state.toggleOpen);

  const handleToggleButtonClick = () => {
    toggleOpen();
  };

  if (status === "pending") return <div>is pending ...</div>;
  if (status === "error") return <ErrorPage />;

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
