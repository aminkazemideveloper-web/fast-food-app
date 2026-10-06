import clsx from "clsx";
import { useGetServices } from "../../../../../services/hooks/services/useGetServices";
import type { ServiceType } from "../../../../../types/service-type";
import HeaderSection from "../../../../shared/HeaderSection/HeaderSection";

import styles from "./Services.module.css";
import ServiceCard from "../../../../ui/cards/ServiceCard/ServiceCard";
import ErrorPage from "../../../../../pages/Error/Page";
import ServicesSkeleton from "../../../../skeletons/ServicesSkeleton/ServicesSkeleton";

function Services() {
  const { data, status } = useGetServices();

  if (status === "pending") return <ServicesSkeleton />;

  if (status === "error") return <ErrorPage />;

  return (
    <div className={clsx(styles.services, "container")}>
      <HeaderSection title="چرا شیلا" />

      <div className={clsx(styles.wrapper)}>
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
