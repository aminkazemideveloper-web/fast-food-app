import clsx from "clsx";
import { useGetServvices } from "../../../../../services/hooks/services/useGetServices";
import type { ServiceType } from "../../../../../types/service-type";
import HeaderSection from "../../../../shared/HeaderSection/HeaderSection";

import styles from "./Services.module.css";
import ServiceCard from "../../../../ui/cards/ServiceCard/ServiceCard";

function Services() {
  const { data } = useGetServvices();

  return (
    <div className={clsx(styles.services, "container")}>
      <HeaderSection title="چرا گلبرگ" />

      <div className={styles.wrapper}>
        <div className={styles.group}>
          {data?.map((service: ServiceType) => (
            <ServiceCard key={`first-${service.id}`} service={service} />
          ))}
        </div>

        <div className={styles.group} aria-hidden="true">
          {data?.map((service: ServiceType) => (
            <ServiceCard key={`second-${service.id}`} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Services;
