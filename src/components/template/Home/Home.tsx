import clsx from "clsx";
import styles from "./Home.module.css";
import HeroSection from "./components/HeroSection/HeroSection";
import Banner from "./components/Banner/Banner";
import Services from "./components/Services/Services";
import Menus from "./components/Menus/Menus";

function Home() {
  return (
    <div className={clsx(styles.home)}>
      <HeroSection />
      <Menus/>
      <Banner />
      <Services />
    </div>
  );
}

export default Home;
