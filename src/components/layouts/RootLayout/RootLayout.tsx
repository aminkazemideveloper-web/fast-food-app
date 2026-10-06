import { Outlet } from "react-router";
import styles from "./RootLayout.module.css";
import Header from "../../ui/Header/Header";
import Footer from "../../ui/Footer/Footer";
import clsx from "clsx";

import NavigationBottom from "../../ui/NavigationBottom/NavigationBottom";
import Navbar from "../../ui/Header/fragments/Navbar/Navbar";
import ScrollToTop from "../../ui/ScrollToTop/ScrollToTop";

function RootLayout() {
  return (
    <div className={clsx(styles.layout)}>
      <Header />

      <Navbar />

      <div className={styles.main}>
        <Outlet />
      </div>

      <NavigationBottom />
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default RootLayout;
