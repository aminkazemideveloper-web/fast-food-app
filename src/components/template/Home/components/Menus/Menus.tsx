import clsx from "clsx";
import ErrorPage from "../../../../../pages/Error/Page";

import styles from "./Menus.module.css";
import HeaderSection from "../../../../shared/HeaderSection/HeaderSection";
import MenuCard from "../../../../ui/cards/MenuCard/MenuCard";
import { useCategoriesProducts } from "../../../../../services/hooks/products/useCategoriesProducts";

function Menus() {
  const { data: categories, status } = useCategoriesProducts();

  if (status === "pending") return <div>loading ...</div>;
  if (status === "error") return <ErrorPage />;
  return (
    <section className={clsx(styles.menus, "container")}>
      <HeaderSection title="منو گلبرگ" />
      <div className={styles.wrapper}>
        {categories?.map((item) => (
          <MenuCard key={item.id} menu={item} />
        ))}
      </div>
    </section>
  );
}

export default Menus;
