async function getAccessToken() {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(
        process.env.NEXT_SPOTIFY_CLIENT_ID + ":" + process.env.NEXT_SPOTIFY_CLIENT_SECRET
      ).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: process.env.NEXT_SPOTIFY_REFRESH_TOKEN!,
    }),
  });

  return response.json();
}

export async function getCurrentlyPlaying() {
  const tokenData = await getAccessToken();
  const accessToken = tokenData.access_token;

  return fetch("https://api.spotify.com/v1/me/player/currently-playing", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}

export async function getRecentlyPlayed() {
  const tokenData = await getAccessToken();
  const accessToken = tokenData.access_token;

  return fetch("https://api.spotify.com/v1/me/player/recently-played", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}
