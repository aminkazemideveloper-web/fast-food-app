import { NavLink } from "react-router";

import styles from "./Navbar.module.css";
import clsx from "clsx";

import { useGetAllCategories } from "../../../../../services/hooks/category/useGetAllCategories";
import ErrorPage from "../../../../../pages/Error/Page";
import NavbarSkeleton from "../../../../skeletons/NavbarSkeleton/NavbarSkeleton";

function Navbar() {
  const { data: categories, status } = useGetAllCategories();

  if (status === "pending") return <NavbarSkeleton />;
  if (status === "error") return <ErrorPage />;

  return (
    <ul className={styles.navbar}>
      {categories?.map((category) => (
        <li key={category.id} className={styles.item}>
          <NavLink
            to={category.link}
            className={({ isActive }) =>
              clsx(styles.link, isActive && styles.active)
            }
          >
            {category.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default Navbar;
