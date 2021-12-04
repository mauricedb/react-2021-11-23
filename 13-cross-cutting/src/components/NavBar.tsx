import { Link } from 'react-router-dom';
import classes from './NavBar.module.css';

export function NavBar() {
  return (
    <nav className={classes.NavBar}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/top-rated-movies">Top Rated Movies</Link>
        </li>
        <li>
          <Link to="/popular-movies">Popular Movies</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}
