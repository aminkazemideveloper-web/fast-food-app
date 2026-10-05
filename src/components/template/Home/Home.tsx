import clsx from "clsx";
import styles from "./Home.module.css";
import HeroSection from "./components/HeroSection/HeroSection";
import Banner from "./components/Banner/Banner";
import Services from "./components/Services/Services";
import Menus from "./components/Menus/Menus";
import VisualFood from "./components/VisualFood/VisualFood";
import BlogSection from "./components/BlogSection/BlogSection";

function Home() {
  return (
    <div className={clsx(styles.home)}>
      <HeroSection />
      <Menus />
      <Banner />
      <VisualFood />
      <Services />
      <BlogSection />
    </div>
  );
}

export default Home;
