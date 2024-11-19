import {
  IoPlaySkipBackSharp,
  IoPlaySkipForward,
  IoPlayCircle,
  IoShuffle,
  IoRepeat,
} from "react-icons/io5";
import { TbMicrophone2, TbDeviceImacPause, TbVolume } from "react-icons/tb";
import { RiSpotifyFill, RiHeartLine, RiListCheck } from "react-icons/ri";
import { PiScreencastBold } from "react-icons/pi";

export function Footer() {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-700 p-4 grid grid-cols-3">
      <div className="flex ">
        <div className="flex gap-4 w-96">
          <RiSpotifyFill className=" h-20 w-20 bg-red-500 rounded" />
          <div className="flex flex-col justify-center gap-1">
            <h1>Divine</h1>
            <span className="text-zinc-400">Saleka Feat. Kid Cudi</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <RiHeartLine className="size-6 text-zinc-400" />
          <PiScreencastBold className="size-6 text-zinc-400" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-5 justify-center items-center">
          <IoShuffle className="size-8" />
          <IoPlaySkipBackSharp className="size-8" />
          <IoPlayCircle className="size-10" />
          <IoPlaySkipForward className="size-8" />
          <IoRepeat className="size-8" />
        </div>
        <div className="flex items-center justify-center">
          <span>0:45</span>
          <div className="w-[400px] border-t-[1px] ml-4 border-zinc-200"></div>
          <div className="w-[50px] border-t-[1px] mr-4 border-zinc-500"></div>
          <span>1:47</span>
        </div>
      </div>
      <div className="flex justify-end items-center gap-2">
        <TbMicrophone2 className="size-6 text-zinc-500" />
        <RiListCheck className="size-6 text-zinc-500" />
        <TbDeviceImacPause className="size-6 text-zinc-500" />
        <TbVolume className="size-6 text-zinc-500" />
        <div className="w-[100px] border-t-4 rounded border-zinc-200"></div>
      </div>
    </footer>
  );
}
