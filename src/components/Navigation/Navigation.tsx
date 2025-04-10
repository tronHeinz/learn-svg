import { Link } from 'react-router-dom';
import styles from './navigation.module.scss';
import contentData from '../../data';

const Navigation = () => {
  const { sections } = contentData;
  //@todo add above a filter field
  return (
    <>
      <ul className={styles.navigation}>
        {sections.map(({ navigation }) => {
          return (
            <li key={navigation.to} className={styles.navigationLink}>
              <Link to={navigation.to}>{navigation.linkName}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Navigation;
