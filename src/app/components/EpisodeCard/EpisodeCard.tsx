import { RiSpotifyFill } from "react-icons/ri";

export function EpisodeCard() {
  return (
    <button className="flex flex-col h-52 w-52 bg-zinc-800 p-4 gap-4 rounded-md items-center 2xl:w-64 2xl:h-80  min-[1800px]:w-72 min-[1800px]:h-96 justify-center overflow-hidden hover:bg-white/10 transition-colors">
      <RiSpotifyFill className=" size-40 bg-green-600 rounded-md min-[1800px]:size-56" />
      <div className="flex flex-col gap-4">
        <span className="font-bold">Playlist</span>
        <span className="text-sm text-zinc-400 ">Sep 2022 - 36 Min</span>
      </div>
    </button>
  );
}
