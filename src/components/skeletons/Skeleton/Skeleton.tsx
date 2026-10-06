import clsx from "clsx";
import styles from "./Skeleton.module.css";

type Status = "rounded" | "circle" | "card";
type Props = {
  width: string;
  height?: string;
  status?: Status;
};

function Skeleton({ height = "16px", width, status = "rounded" }: Props) {
  return (
    <div
      className={clsx(styles.skeleton, styles[status])}
      style={{ width, height }}
    ></div>
  );
}

export default Skeleton;
