import { NextApiRequest, NextApiResponse } from "next";
import { getCurrentlyPlaying, getRecentlyPlayed } from "@/app/utils/fetchSpotifyData";
import { ITrackData } from "@/app/types/ITrackData";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const currentResponse = await getCurrentlyPlaying();
    if (currentResponse.status === 200) {
      const data = await currentResponse.json();
      const { name, artists, album } = data.item;
      const { is_playing } = data;

      res.status(200).json({
        name,
        artists: artists.map((artist: any) => artist.name),
        cover: album.images[0].url,
        isCurrentlyPlaying: is_playing,
      } as ITrackData);
    } else {
      const recentResponse = await getRecentlyPlayed();
      const data = await recentResponse.json();
      const { name, artists, album } = data.items[0].track;

      res.status(200).json({
        name,
        artists: artists.map((artist: any) => artist.name),
        cover: album.images[0].url,
        isCurrentlyPlaying: false,
      } as ITrackData);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch track data." });
  }
}
