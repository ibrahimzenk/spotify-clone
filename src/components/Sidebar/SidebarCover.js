import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSidebar } from "../../stores/player";
import { Icon } from "../../Icons";

function SidebarCover() {
  const dispatch = useDispatch();
  const current = useSelector((state) => state.player.current);

  return (
    <div className="pt-[100%] group relative">
      <img src={current.image} className="w-full h-full object-cover absolute top-0 left-0" alt="" />
      <button
        onClick={() => dispatch(setSidebar(false))}
        className="w-6 h-6 flex items-center justify-center text-white bg-black rotate-180 rounded-full opacity-0 group-hover:opacity-60 hover:!opacity-100 hover:scale-[1.06] absolute top-1 right-1"
      >
        <Icon size={16} name="arrowUp" />
      </button>
    </div>
  );
}

export default SidebarCover;
