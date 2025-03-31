import { Outlet } from "react-router-dom";
import Navigation from "../Navigation";
import styles from "./rootLayout.module.scss";

const RootLayout = () => {
  return (
    <main className={styles.container}>
      <Navigation />
      <Outlet />
    </main>
  );
};

export default RootLayout;
