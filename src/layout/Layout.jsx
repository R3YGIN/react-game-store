import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "./Layout.module.css";
import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className={styles.main__container}>
        <div className={styles.main}>
          <Navigation />
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
