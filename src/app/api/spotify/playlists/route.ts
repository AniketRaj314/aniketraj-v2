import { NextResponse } from 'next/server';
import { getUserPlaylists } from '../../../../../lib/spotify';

export async function GET() {
  try {
    const playlists = await getUserPlaylists();
    return NextResponse.json({ playlists });
  } catch (error: any) {
    let status = 500;
    if (error.message.includes('access token')) status = 401;
    if (error.message.includes('rate limit')) status = 429;
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status });
  }
} 