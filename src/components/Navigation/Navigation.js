import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import style from './Navigation.module.css';

function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <nav className={style.nav}>
      <NavLink to="/" exact className={style.link} activeClassName={style.activeLink}>
        HW-08
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact
          className={style.link}
          activeClassName={style.activeLink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}

export default Navigation;