import { useEffect } from "react";
import Home from "../../components/template/Home/Home";
import styles from "./HomePage.module.css";

function HomePage() {
  useEffect(() => {
    document.title = "صفحه اصلی";
  }, []);
  return (
    <div className={styles.home}>
      <Home />
    </div>
  );
}

export default HomePage;
