import Home from "../../components/template/Home/Home";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.home}>
      <title>صفحه اصلی</title>
      <Home />
    </div>
  );
}

export default HomePage;
