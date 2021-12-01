import { ReactElement } from 'react';
import { Link, NavLink } from 'react-router-dom';

export function NavBar(): ReactElement {
  return (
    <nav>
      <ul className="NavItems">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <Link to="/cat">Cat</Link>
        </li>
        <li>
          <Link to="/cat/Zorro">Zorro</Link>
        </li>
        <li>
          <Link to="/dog">Dog</Link>
        </li>
      </ul>
    </nav>
  );
}
