import { NextResponse } from 'next/server';
import { getRecentlyPlayed } from '../../../../../lib/spotify';

export async function GET() {
  try {
    const data = await getRecentlyPlayed();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || 'Internal Server Error' }, { status: 500 });
  }
} 