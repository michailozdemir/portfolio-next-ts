import Image from "next/image";
import React from "react";
import { ITrackData } from "../types/ITrackData";

async function getSpotifyData(): Promise<ITrackData> {
  const response = await fetch(`${process.env.NEXT_API_URL}/api/spotify`, { cache: "no-store" });
  return response.json();
}

const SpotifyCardServer = async () => {
  const track: ITrackData = await getSpotifyData();

  return (
    <div className="base-card dark:bg-spotify-gradient border-none max-container:order-4">
      <div className="flex items-center gap-2 mb-6">
        <Image src="/images/logos/spotify-logo.svg" alt="Spotify" width="20" height="20" />
        <h4 className="font-bold">Music</h4>
      </div>

      {track && (
        <div className="flex gap-4 items-stretch">
          <Image src={track?.cover} alt="Album cover" width="70" height="70" className="rounded-xl" />
          <div className="flex flex-col">
            <p className="mb-3 text-sm leading-none font-light">
              {track?.isCurrentlyPlaying ? "Currently listening to:" : "Offline. Last played:"}
            </p>
            <div className="mt-auto grid gap-1">
              <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-light leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
                {track?.artists?.join(", ")}
              </p>
              <p className="font-semibold leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
                {track?.name}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpotifyCardServer;
