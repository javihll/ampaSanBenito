'use server';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { Event } from './types';

const eventsDirectory = path.join(process.cwd(), 'content/events');

export async function getSortedEventsData(): Promise<Event[]> {
  const fileNames = fs.readdirSync(eventsDirectory);
  const allEventsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(eventsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      ...(matterResult.data as Omit<Event, 'slug' | 'id'>),
      id: matterResult.data.id || 0, // Ensure id is a number
    } as Event;
  });

  return allEventsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getAllEventSlugs() {
  const fileNames = fs.readdirSync(eventsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getEventData(slug: string): Promise<Event> {
    const fullPath = path.join(eventsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
  
    return {
      slug,
      ...(matterResult.data as Omit<Event, 'slug'>),
    };
  }
  
