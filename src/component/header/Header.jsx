import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/products">PRODUCTS</NavLink>
        </li>
        <li>
          <NavLink to="/counter">COUNTER</NavLink>
        </li>
        <li>
          <NavLink to="/sign-up">Sign-up</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
