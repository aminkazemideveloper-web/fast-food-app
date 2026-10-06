import clsx from "clsx";
import styles from "./HeroWritten.module.css";

import HeroBadge from "../HeroBadge/HeroBadge";
import HeroActions from "../HeroActions/HeroActions";

function HeroWritten() {
  const typeFormatter = (text: number) => {
    return text.toLocaleString("fa-IR");
  };
  return (
    <div className={clsx(styles.written)}>
      <HeroBadge />
      <div className={styles.vituals}>
        <h1>
          رستوران‌های زنجیره‌ای
          <span> شیلا</span>
        </h1>

        <p>
          تجربه‌ای متفاوت از طعم، کیفیت و تازگی
          <br />
          با بیش از {typeFormatter(75)} شعبه در تهران و البرز
        </p>
      </div>
      <HeroActions />
    </div>
  );
}

export default HeroWritten;
