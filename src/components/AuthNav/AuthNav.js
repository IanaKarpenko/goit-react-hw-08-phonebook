import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.scss';


const AuthNav = () => (
  <div className={styles.navContainer}>
    <NavLink
      to="/register"
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Registration
    </NavLink>
    <NavLink
      to="/login"
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Login
    </NavLink>
  </div>
);

export default AuthNav;
