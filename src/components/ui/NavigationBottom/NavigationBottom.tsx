import clsx from "clsx";
import styles from "./NavigationBottom.module.css";

import { NavLink } from "react-router";
import useScrollAnimation from "../../../hooks/useScrollAnimation";
import { useGetAllCategories } from "../../../services/hooks/category/useGetAllCategories";
import MingcuteHome3Line from "../../../icons/MingcuteHome3Line";
import MingcuteChartBarLine from "../../../icons/MingcuteChartBarLine";
import MingcuteNewdotLine from "../../../icons/MingcuteNewdotLine";
import MingcuteCalendarTimeAddLine from "../../../icons/MingcuteCalendarTimeAddLine";
import MingcuteUserQuestionFill from "../../../icons/MingcuteUserQuestionFill";
import MingcutePencil3AiLine from "../../../icons/MingcutePencil3AiLine";

// import MingcuteHome3Line from "../../../../icons/MingcuteHome3Line";
// import MingcuteChartBarLine from "../../../../icons/MingcuteChartBarLine";
// import MingcuteNewdotLine from "../../../../icons/MingcuteNewdotLine";
// import MingcuteCalendarTimeAddLine from "../../../../icons/MingcuteCalendarTimeAddLine";
// import MingcuteUserQuestionFill from "../../../../icons/MingcuteUserQuestionFill";
// import MingcutePencil3AiLine from "../../../../icons/MingcutePencil3AiLine";

function NavigationBottom() {
  const containerRef = useScrollAnimation();

  const iconMap = {
    MingcuteHome3Line,
    MingcuteChartBarLine,
    MingcuteNewdotLine,
    MingcuteCalendarTimeAddLine,
    MingcuteUserQuestionFill,
    MingcutePencil3AiLine,
  };

  const { data: navbarsData } = useGetAllCategories();
  return (
    <nav
      ref={containerRef}
      className={clsx(styles.navigation, "card", "animate", " fade-up")}
    >
      <ul className={styles.menu}>
        {navbarsData?.map((item) => {
          const Icon = iconMap[item.icon];
          return (
            <li key={item.id} className={styles.item}>
              <NavLink
                className={({ isActive }) =>
                  clsx(styles.link, isActive && styles.active)
                }
                to={item.link}
              >
                <span className={styles.icon}> {Icon && <Icon />}</span>
                <span className={styles.label}>{item.label}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavigationBottom;
