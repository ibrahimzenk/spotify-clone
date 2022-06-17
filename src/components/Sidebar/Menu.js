import { Icon } from "../../Icons";
import { NavLink } from "react-router-dom";

function Menu() {
  let inactiveClassName = "h-10 gap-x-4 flex items-center text-sm font-semibold text-link rounded hover:text-white px-4";
  let activeClassName = "h-10 gap-x-4 flex items-center text-sm font-semibold text-white rounded hover:text-white px-4 bg-active";
  return (
    <nav className="px-2">
      <ul>
        <li>
          <NavLink to={"/"} className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)}>
            <span>
              <Icon name="home" />
            </span>
            Ana sayfa
          </NavLink>
        </li>
        <li>
          <NavLink to={"/search"} className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)}>
            <span>
              <Icon name="search" />
            </span>
            Ara
          </NavLink>
        </li>
        <li>
          <NavLink to={"/collection"} className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)}>
            <span>
              <Icon name="collection" />
            </span>
            Kitaplığın
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
