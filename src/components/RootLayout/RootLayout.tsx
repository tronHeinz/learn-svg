import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation';
import styles from './rootLayout.module.scss';

const RootLayout = () => {
  return (
    <div className={styles.container}>
      <header>here is the header</header>
      <main className={styles.container}>
        <Navigation />
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
};

export default RootLayout;
