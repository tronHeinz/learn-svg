import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation';
import styles from './rootLayout.module.scss';

const RootLayout = () => {
  return (
    <div className={styles.container}>
      <header>here is the header</header>
      <main>
        <Navigation />
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
