import { Link } from 'react-router-dom';
import styles from './navigation.module.scss';

const navigationData = [
  {
    to: '/',
    text: 'Make a line',
  },
  {
    to: '/drawSimpleLine',
    text: 'Draw a simple line',
  },
];

const Navigation = () => {
  //@todo add above a filter field
  return (
    <>
      <ul className={styles.navigation}>
        {navigationData.map((navItem) => (
          <li className={styles.navigationLink}>
            <Link to={navItem.to}>{navItem.text}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navigation;

/**
 * define all content what i want to share
 * - draw a line
 * - draw a polygone
 * - draw a path
 * - draw a more than one lines and group it
 * - transform
 */
