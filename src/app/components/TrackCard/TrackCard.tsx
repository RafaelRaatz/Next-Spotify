import { RiSpotifyFill } from "react-icons/ri";
import { FaPlayCircle } from "react-icons/fa";

export function TrackCard() {
  return (
    <a className="flex bg-zinc-500 w-80 h-20 items-center gap-4 font-bold rounded-md  2xl:w-96 min-[1800px]:w-[500px] overflow-hidden hover:bg-white/10 transition-colors ">
      <RiSpotifyFill className=" h-20 w-20 bg-purple-500" />
      <span>Music</span>
    </a>
  );
}
