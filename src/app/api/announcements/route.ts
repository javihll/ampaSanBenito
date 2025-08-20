import { getSortedAnnouncementsData } from '@/lib/announcements';
import { NextResponse } from 'next/server';

export async function GET() {
  const allAnnouncementsData = await getSortedAnnouncementsData();
  return NextResponse.json(allAnnouncementsData);
}
