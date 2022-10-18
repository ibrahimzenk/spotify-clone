import { useSelector } from "react-redux";
import { Icon } from "../Icons";
import CustomRange from "./CustomRange";
import { secondsToTime } from "../utils";

function FullScreenPlayer({ toggle, controls, state, volumeIcon }) {
  const { current } = useSelector((state) => state.player);

  return (
    <div className="h-full relative" onClick={controls[state?.playing ? "pause" : "play"]}>
      <div className="absolute inset-0 bg-cover bg-center object-cover blur-md opacity-30" style={{ backgroundImage: `url(${current.image})` }} />

      <div className="absolute top-10 left-16 flex items-center gap-x-3 text-white opacity-70">
        <Icon name="logo" size={34} />

        <div className="text-xs">
          <p style={{ fontSize: 11 }}>PLAYING FROM PLAYLİST</p>
          <h6 className="font-semibold mt-0.5">{current.title}</h6>
        </div>
      </div>

      <div className="absolute bottom-40 left-16 flex items-center gap-x-5">
        <img src={current.image} alt="" className="w-24 h-24 object-cover" />

        <div className="self-end">
          <h3 className="text-3xl font-bold">{current.title}</h3>
          <p className="text-sm font-medium opacity-50">{current.description}</p>
        </div>
      </div>

      <div
        className="flex flex-col items-center w-full px-16 absolute bottom-8"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="w-full flex items-center gap-x-2 mb-3">
          <div className="text-[0.688rem] text-white text-opacity-70"> {secondsToTime(state?.time)} </div>
          <CustomRange value={state?.time} step={0.1} min={0} max={state?.duration || 1} onChange={(value) => controls.seek(value)} />
          <div className="text-[0.688rem] text-white text-opacity-70">{secondsToTime(state?.duration)}</div>
        </div>

        <div className="w-full flex items-center justify-between">
          <div className="w-[20%] flex items-center">
            <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <Icon size={24} name="heart" />
            </button>
          </div>

          <div className="w-[60%] flex items-center justify-center gap-x-5">
            <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <Icon size={24} name="shuffle" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <Icon size={24} name="playerPrev" />
            </button>
            <button onClick={controls[state?.playing ? "pause" : "play"]} className="w-16 h-16 flex items-center justify-center bg-white text-black rounded-full hover:scale-[1.06]">
              <Icon size={24} name={state?.playing ? "pause" : "play"} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <Icon size={24} name="playerNext" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <Icon size={24} name="repeat" />
            </button>
          </div>

          <div className="w-[20%] flex items-center justify-end">
            <button onClick={controls[state.muted ? "unmute" : "mute"]} className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <Icon size={16} name={volumeIcon} />
            </button>

            <div className="w-[5.813rem] max-w-full">
              <CustomRange
                value={state.muted ? 0 : state?.volume}
                step={0.01}
                min={0}
                max={1}
                onChange={(value) => {
                  controls.unmute();
                  controls.volume(value);
                }}
              />
            </div>

            <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 ml-3" onClick={toggle}>
              <Icon size={24} name="fullScreenOff" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullScreenPlayer;
