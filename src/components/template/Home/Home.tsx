import clsx from "clsx";
import styles from "./Home.module.css";
import HeroSection from "./components/HeroSection/HeroSection";
import Banner from "./components/Banner/Banner";
import Services from "./components/Services/Services";

function Home() {
  return (
    <div className={clsx(styles.home)}>
      <HeroSection />
      <Banner />
      <Services />
    </div>
  );
}

export default Home;
