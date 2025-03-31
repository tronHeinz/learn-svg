import { Link } from "react-router-dom";
import styles from "./navigation.module.scss";

const Navigation = () => {
  return (
    <ul className={styles.navigation}>
      <li className={styles.navigationLink}>
        <Link to="/">Make a line</Link>
      </li>
      <li className={styles.navigationLink}>
        <Link to="/drawSimpleLine">Draw a simple line</Link>
      </li>
    </ul>
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
