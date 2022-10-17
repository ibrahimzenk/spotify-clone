import { Menu } from "@headlessui/react";
import { Icon } from "../../Icons";

function Auth() {
  const user = {
    name: "ibrahimzenk",
    avatar: "https://i.scdn.co/image/ab6775700000ee852fa861ca821f75a37e91be60",
  };

  return (
    <Menu as="nav" className="relative">
      {({ open }) => (
        <>
          <Menu.Button className={`flex items-center gap-x-2 h-8 rounded-2xl pr-2 ${open ? "bg-active" : "bg-black"} hover:bg-active`}>
            <img src={user.avatar} alt="" className="w-8 h-8 rounded-full p-0.5" />
            <span className="text-sm font-semibold">{user.name}</span>
            <span className={`${open && "rotate-180"}`}>
              <Icon name="downDir" size={16} />
            </span>
          </Menu.Button>
          <Menu.Items className="absolute top-full right-0 w-48 p-1 rounded bg-active translate-y-2 z-10">
            <Menu.Item>
              {({ active }) => (
                <a className={`h-10 flex justify-between items-center px-2 text-sm rounded ${active && "bg-white bg-opacity-10"}`} href="#not">
                  Hesap
                  <Icon name="external" size={16} />
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a className={`h-10 flex items-center px-2 text-sm rounded ${active && "bg-white bg-opacity-10"}`} href="#not">
                  Profil
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a className={`h-10 flex items-center px-2 text-sm rounded ${active && "bg-white bg-opacity-10"}`} href="#not">
                  Oturumu kapat
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </>
      )}
    </Menu>
  );
}

export default Auth;
