import clsx from "clsx";
import styles from "./BannerCard.module.css";

import { Link } from "react-router";
import type { BannerType } from "../../../../types/banner-type";

type Props = {
  banner: BannerType;
};

function BannerCard({ banner }: Props) {
  return (
    <Link to={banner.link} className={clsx(styles["banner-item"], "card")}>
      <div className={styles.glow}></div>
      <div className={styles["img-box"]}>
        <img className={styles.img} src={banner.img} alt="" />
      </div>
    </Link>
  );
}

export default BannerCard;
