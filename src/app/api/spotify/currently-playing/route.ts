import { NextResponse } from 'next/server';
import { getCurrentlyPlaying } from '../../../../../lib/spotify';

export async function GET() {
  try {
    const data = await getCurrentlyPlaying();
    if (!data) return NextResponse.json({ isPlaying: false });
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || 'Internal Server Error' }, { status: 500 });
  }
} 