import type { ServiceType } from "../../../../types/service-type";
import styles from "./ServiceCard.module.css";

import clsx from "clsx";

type Props = {
  service: ServiceType;
};

function ServiceCard({ service }: Props) {
  return (
    <div className={clsx(styles.service, "card")}>
      <div className={styles["img-box"]}>
        <img src={service.img} alt="" />
      </div>

      <div className={styles.title}>{service.title}</div>
    </div>
  );
}

export default ServiceCard;
