import type { ReactNode } from "react";

import styles from "./Overlay.module.css";

type Props = {
  onClose: () => void;
};

const Overlay = ({ onClose }: Props): ReactNode => {
  // const toggleCart = useFoodStore((state) => state.toggleOpen);
  return <div className={styles.overlay} onClick={onClose}></div>;
};

export default Overlay;
