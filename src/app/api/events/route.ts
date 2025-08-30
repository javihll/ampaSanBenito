import { getSortedEventsData } from '@/lib/events';
import { NextResponse } from 'next/server';

export async function GET() {
  const allEventsData = await getSortedEventsData();
  return NextResponse.json(allEventsData);
}
