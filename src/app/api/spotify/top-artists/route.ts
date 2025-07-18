import { NextResponse } from 'next/server';
import { getTopArtists } from '../../../../../lib/spotify';

export async function GET() {
  try {
    const data = await getTopArtists();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || 'Internal Server Error' }, { status: 500 });
  }
} 