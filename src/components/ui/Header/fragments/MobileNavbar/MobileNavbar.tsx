import clsx from "clsx";
import styles from "./MobileNavbar.module.css";

import IconButton from "../../../../shared/IconButton/IconButton";
import MingcuteArrowLeftFill from "../../../../../icons/MingcuteArrowLeftFill";
import Logo from "../Logo/Logo";
import { Link, NavLink, useLocation } from "react-router";
import type { CategoryType } from "../../../../../types/category-type";
import MingcuteHome3Line from "../../../../../icons/MingcuteHome3Line";
import MingcuteChartBarLine from "../../../../../icons/MingcuteChartBarLine";
import MingcuteNewdotLine from "../../../../../icons/MingcuteNewdotLine";
import MingcuteCalendarTimeAddLine from "../../../../../icons/MingcuteCalendarTimeAddLine";
import MingcuteUserQuestionFill from "../../../../../icons/MingcuteUserQuestionFill";
import MingcutePencil3AiLine from "../../../../../icons/MingcutePencil3AiLine";
import { useSidebareStore } from "../../../../../stores/sidebar-store";
import { useFoodStore } from "../../../../../stores/food-store";

type Props = {
  categories: CategoryType[];
};

function MobileNavbar({ categories }: Props) {
  const isCollapse = useSidebareStore((state) => state.isCollaps);
  const isOpen = useSidebareStore((state) => state.isOpen);
  const toggleCollaps = useSidebareStore((state) => state.toggleSidebar);
  const toggleCart = useFoodStore((state) => state.toggleOpen);
  const iconMap = {
    MingcuteHome3Line,
    MingcuteChartBarLine,
    MingcuteNewdotLine,
    MingcuteCalendarTimeAddLine,
    MingcuteUserQuestionFill,
    MingcutePencil3AiLine,
  };

  const location = useLocation();

  const isLocation = location.pathname.includes("/order");

  return (
    <>
      {isOpen === "open" && (
        <nav
          className={clsx(
            styles["mobile-navbar"],
            isCollapse && styles.collapse,
            isOpen === "open" && styles["navbar-open"],
          )}
        >
          <div className={styles.topbar}>
            <IconButton
              className={clsx(styles.btn, "action")}
              onClick={() => toggleCollaps()}
            >
              <MingcuteArrowLeftFill />
            </IconButton>
            <Logo />
          </div>
          <ul className={styles.list}>
            {categories.map((item) => {
              const Icon = iconMap[item.icon];

              return (
                <li key={item.id} className={styles.item}>
                  <NavLink
                    className={({ isActive }) =>
                      clsx(styles.link, isActive && styles.active)
                    }
                    key={item.id}
                    to={item.link}
                  >
                    <span className={styles.label}>
                      {isCollapse ? (
                        item.label
                      ) : (
                        <span>{item.label.slice(0, 8)}...</span>
                      )}
                    </span>
                    <span className={styles.icon}>{Icon && <Icon />}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>

          <div className={styles.actions}>
            {isLocation ? (
              <div className={styles.actions}>
                <Link className={"action"} to="/home">
                  ورود | ثبت نام
                </Link>
                <button onClick={() => toggleCart()} className={"action"}>
                  {" "}
                  سبد خرید
                </button>
              </div>
            ) : (
              <Link className={"action"} to="/order">
                سفارش آنلاین
              </Link>
            )}
          </div>
        </nav>
      )}
    </>
  );
}

export default MobileNavbar;
