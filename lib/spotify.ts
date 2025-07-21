const {
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
  SPOTIFY_REFRESH_TOKEN,
} = process.env;

const BASIC_AUTH = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64');
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';

async function getAccessToken(): Promise<string> {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${BASIC_AUTH}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: SPOTIFY_REFRESH_TOKEN!,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Spotify token error:', {
      status: response.status,
      statusText: response.statusText,
      body: errorText
    });
    throw new Error(`Failed to fetch Spotify access token: ${response.status} ${errorText}`);
  }

  const data = await response.json();
  return data.access_token;
}

async function spotifyFetch(endpoint: string, params?: Record<string, string>) {
  const accessToken = await getAccessToken();
  const url = new URL(`https://api.spotify.com/v1/${endpoint}`);
  if (params) {
    Object.entries(params).forEach(([key, value]) => url.searchParams.append(key, value));
  }
  const res = await fetch(url.toString(), {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
  });
  if (!res.ok) {
    throw new Error(`Spotify API error: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

export async function getTopTracks() {
  return spotifyFetch('me/top/tracks', {
    limit: '20',
    time_range: 'medium_term', // last 6 months
  });
}

export async function getTopArtists() {
  return spotifyFetch('me/top/artists', {
    limit: '20',
    time_range: 'medium_term',
  });
}

export async function getRecentlyPlayed() {
  return spotifyFetch('me/player/recently-played', {
    limit: '20',
  });
}

export async function getCurrentlyPlaying() {
  // This endpoint returns 204 if nothing is playing
  const accessToken = await getAccessToken();
  const url = 'https://api.spotify.com/v1/me/player/currently-playing';
  const res = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
  });
  if (res.status === 204) return null;
  if (!res.ok) {
    throw new Error(`Spotify API error: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

export { getAccessToken }; 