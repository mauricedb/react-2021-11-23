import { ReactElement } from 'react';

export function NavBar(): ReactElement {
  return (
    <nav>
      <ul className="NavItems">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/cat">Cat</a>
        </li>
        <li>
          <a href="/dog">Dog</a>
        </li>
      </ul>
    </nav>
  );
}
