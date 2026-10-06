import clsx from "clsx";
import styles from "./BannerCard.module.css";

import { Link } from "react-router";

type Props = {
  img: string;
};

function BannerCard({ img }: Props) {
  return (
    <Link to="/order" className={clsx(styles["banner-item"], "card")}>
      <div className={styles.glow}></div>
      <div className={styles["img-box"]}>
        <img
          className={styles.img}
          src={img}
          alt=""
        />
      </div>
    </Link>
  );
}

export default BannerCard;
