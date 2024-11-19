import { RiHome2Fill, RiSearch2Line, RiSpotifyFill } from "react-icons/ri";
import { BiLibrary, BiPlus, BiHeart, BiBookmark } from "react-icons/bi";

export function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6 flex flex-col gap-4">
      <div className="mb-4">
        <h1 className="flex gap-2 text-2xl font-bold">
          <RiSpotifyFill className="size-10" />
          Spotify
        </h1>
      </div>
      <nav className="flex flex-col gap-10">
        <div className="flex  flex-col gap-4">
          <a className="flex gap-4" href="">
            <RiHome2Fill className="size-6" /> Home{" "}
          </a>
          <a className="flex gap-4" href="">
            <RiSearch2Line className="size-6" /> Search{" "}
          </a>
          <a className="flex gap-4" href="">
            <BiLibrary className="size-6" /> Your library{" "}
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <a className="flex gap-4" href="">
            <span className="bg-zinc-500 rounded-sm size-6 flex justify-center items-center">
              <BiPlus className="size-4 " />{" "}
            </span>{" "}
            Create Playlist{" "}
          </a>
          <a className="flex gap-4" href="">
            <span className="bg-purple-500 rounded-sm size-6 flex justify-center items-center">
              <BiHeart className="size-4 " />{" "}
            </span>{" "}
            Liked Songs{" "}
          </a>
          <a className="flex gap-4" href="">
            <span className="bg-green-500 rounded-sm size-6 flex justify-center items-center">
              <BiBookmark className="size-4 " />{" "}
            </span>{" "}
            Your Episodes{" "}
          </a>
        </div>
      </nav>

      <div className="border-[1px] border-zinc-800 "></div>

      <div className="flex flex-col text-zinc-500 gap-1">
        <a href="">Jazz</a>
        <a href="">Hangover Cure</a>
        <a href="">Your Top Songs 2024</a>
        <a href="">Indie</a>
        <a href="">Rock</a>
        <a href="">Radar</a>
      </div>
    </aside>
  );
}
