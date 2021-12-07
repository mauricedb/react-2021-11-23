import { Link, NavLink } from 'react-router-dom';

const menuItems = [
  { caption: 'Home', to: '/' },
  { caption: 'useState()', to: '/use-state' },
  { caption: 'useReducer()', to: '/use-reducer' },
  { caption: 'Jotai', to: '/jotai' },
  { caption: 'MobX', to: '/mobx' },
  { caption: 'Recoil', to: '/recoil' },
  { caption: 'Redux', to: '/redux' },
  { caption: 'Valtio', to: '/valtio' },
  { caption: 'XState', to: '/xstate' },
  { caption: 'Zustand', to: '/zustand' },
];

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          State Management
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {menuItems.map((item) => (
              <li key={item.to} className="nav-item">
                <NavLink className="nav-link" to={item.to}>
                  {item.caption}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
