import { NavLink } from "react-router-dom";
import { Icon } from "../Icons";
import logo from "../img/logo.svg";
import DownloadApp from "./Sidebar/DownloadApp";

import Menu from "./Sidebar/Menu";
import Playlists from "./Sidebar/Playlists";

function Sidebar() {
  return (
    <aside className="w-60 pt-6 flex flex-col flex-shrink-0 bg-black">
      <NavLink to={"/"} className="mb-7 px-6">
        <img src={logo} alt="" className="h-10" />
      </NavLink>

      <Menu />

      <nav className="mt-6">
        <ul>
          <li>
            <a href="#" className="px-6 py-2 flex items-center group text-sm text-link font-semibold hover:text-white">
              <span className="w-6 h-6 mr-4 flex items-center justify-center bg-white bg-opacity-60 group-hover:bg-opacity-100 rounded-sm text-black">
                <Icon name="plus" size={12} />
              </span>
              Çalma Listesi Oluştur
            </a>
          </li>
          <li>
            <a href="#" className="px-6 py-2 flex items-center group text-sm text-link font-semibold hover:text-white">
              <span className="w-6 h-6 mr-4 flex items-center justify-center bg-gradient-to-br from-purple-700 to-blue-300 opacity-60 group-hover:opacity-100 rounded-sm text-white">
                <Icon name="heart" size={12} />
              </span>
              Beğenilen Şarkılar
            </a>
          </li>
        </ul>
      </nav>

      <Playlists />

      <DownloadApp />
    </aside>
  );
}

export default Sidebar;
