import { TrackCard, EpisodeCard } from "..";

export function Main() {
  return (
    <main className=" p-6 flex flex-col gap-12 ">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Good Afternoon</h1>
        <div className=" grid grid-cols-3 gap-4">
          <TrackCard />
          <TrackCard />
          <TrackCard />
          <TrackCard />
          <TrackCard />
          <TrackCard />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Episodes For You</h1>
        <div className="flex gap-4 ">
          <EpisodeCard />
          <EpisodeCard />
          <EpisodeCard />
          <EpisodeCard />
          <EpisodeCard />
        </div>
      </div>
    </main>
  );
}
