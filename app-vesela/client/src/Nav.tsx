import { NavLink } from "react-router-dom";

export const Nav = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/">Posts</NavLink>
      </li>
      <li>
        <NavLink to="/new">Add new post</NavLink>
      </li>
      <li>
        <NavLink to="/fibo">Playground: fibo</NavLink>
      </li>
    </ul>
  </nav>
);
