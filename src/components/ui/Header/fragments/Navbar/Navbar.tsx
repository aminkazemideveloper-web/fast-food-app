import { NavLink } from "react-router";

import styles from "./Navbar.module.css";
import clsx from "clsx";
import type { CategoryType } from "../../../../../types/category-type";

type Props = {
  categories: CategoryType[];
};

function Navbar({ categories }: Props) {
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
