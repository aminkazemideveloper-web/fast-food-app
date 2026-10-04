import { useFoodStore } from "../../../stores/food-store";
import styles from "./Overlay.module.css";

function Overlay() {
  const toggleCart = useFoodStore((state) => state.toggleOpen);
  return (
    <div className={styles.overlay} onClick={() => toggleCart()}>
      Overlay
    </div>
  );
}

export default Overlay;
