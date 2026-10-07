import clsx from "clsx";
import ErrorPage from "../../../../../pages/Error/Page";
import styles from "./Menus.module.css";
import HeaderSection from "../../../../shared/HeaderSection/HeaderSection";
import MenuCard from "../../../../ui/cards/MenuCard/MenuCard";
import MenusSkeleton from "../../../../skeletons/MenusSkeleton/MenusSkeleton";
import { useMenus } from "./useMenus";

function Menus() {
  const { categories, containerRef, error, loading } = useMenus();

  if (loading) return <MenusSkeleton />;
  if (error) return <ErrorPage />;

  return (
    <div ref={containerRef} className={clsx(styles.menus, "container")}>
      <HeaderSection title="منو شیلا" />
      <div className={clsx(styles.wrapper, "animate", "slide-right")}>
        {categories?.map((item) => (
          <MenuCard key={item.id} menu={item} />
        ))}
      </div>
    </div>
  );
}

export default Menus;
