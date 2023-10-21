import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
 

  return (
    <nav>
      <ul>
        <li>
          <NavLink  to="/" >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink to="/counter" >
            COUNTER
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
