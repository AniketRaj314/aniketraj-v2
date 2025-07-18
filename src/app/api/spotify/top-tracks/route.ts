import { NextResponse } from 'next/server';
import { getTopTracks } from '../../../../../lib/spotify';

export async function GET() {
  try {
    const data = await getTopTracks();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || 'Internal Server Error' }, { status: 500 });
  }
} 