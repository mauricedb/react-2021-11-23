import { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import classes from './NavBar.module.css';

export function NavBar() {
  const { user } = useContext(AuthContext);

  return (
    <nav className={classes.NavBar}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {user ? (
          <>
            <li>
              <Link to="/top-rated-movies">Top Rated Movies</Link>
            </li>
            <li>
              <Link to="/popular-movies">Popular Movies</Link>
            </li>
          </>
        ) : null}
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}
