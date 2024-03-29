import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Icon } from "../Icons";
import { setCurrent } from "../store/player";

function SongItem({ item }) {
  const dispatch = useDispatch();

  const { current, playing, controls } = useSelector((state) => state.player);

  const imageStyle = (item) => {
    switch (item.type) {
      case "Artist":
        return "rounded-full";

      case "Podcast":
        return "rounded-xl";

      default:
        return "rounded";
    }
  };

  const isCurrent = current?.id === item.id && playing;

  const updateCurrent = () => {
    if (current.id === item.id) {
      if (playing) {
        controls.pause();
      } else {
        controls.play();
      }
    } else {
      dispatch(setCurrent(item));
    }
  };

  return (
    <NavLink key={item.id} to="/" className="bg-footer p-4 rounded hover:bg-active group">
      <div className="pt-[100%] relative mb-4">
        <img src={item.image} className={`absolute inset-0 object-cover w-full h-full ${imageStyle(item)}`} alt="" />

        <button
          onClick={updateCurrent}
          className={`w-10 h-10 rounded-full bg-primary absolute bottom-2 right-2 items-center justify-center group-hover:flex text-black ${!isCurrent ? "hidden" : "flex"}`}
        >
          <Icon name={isCurrent ? "pause" : "play"} size={16} />
        </button>
      </div>

      <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold">{item.title}</h6>

      <p className="line-clamp-2 text-link text-sm mt-1">{item.description}</p>
    </NavLink>
  );
}

export default SongItem;
