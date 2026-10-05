import clsx from "clsx";
import styles from "./Home.module.css";
import HeroSection from "./components/HeroSection/HeroSection";
import Banner from "./components/Banner/Banner";
import Services from "./components/Services/Services";
import Menus from "./components/Menus/Menus";
import VisualFood from "./components/VisualFood/VisualFood";

function Home() {
  return (
    <div className={clsx(styles.home)}>
      <HeroSection />
      <Menus/>
      <Banner />
      <VisualFood/>
      <Services />
    </div>
  );
}

export default Home;
