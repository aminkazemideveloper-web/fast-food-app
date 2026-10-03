import { Outlet } from "react-router";
import styles from "./RootLayout.module.css";
import Header from "../../ui/Header/Header";
import Footer from "../../ui/Footer/Footer";
import clsx from "clsx";

import useScrollAnimation from "../../../hooks/useScrollAnimation";
import NavigationBottom from "../../ui/NavigationBottom/NavigationBottom";
import Navbar from "../../ui/Header/fragments/Navbar/Navbar";

function RootLayout() {
  const containerRef = useScrollAnimation();
  return (
    <div ref={containerRef} className={clsx(styles.layout)}>
      <Header />

      <Navbar />

      <div className={styles.main}>
        <Outlet />
      </div>

      <NavigationBottom />
      <Footer />
    </div>
  );
}

export default RootLayout;
