'use server';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import type { Announcement } from './types';

const announcementsDirectory = path.join(process.cwd(), 'content/announcements');

export async function getSortedAnnouncementsData(): Promise<(Omit<Announcement, 'content'>)[]> {
  const fileNames = fs.readdirSync(announcementsDirectory);
  const allAnnouncementsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(announcementsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      ...(matterResult.data as Omit<Announcement, 'slug' | 'content' | 'id'>),
      id: matterResult.data.id || 0, // Ensure id is a number
    };
  });

  return allAnnouncementsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getAllAnnouncementSlugs() {
  const fileNames = fs.readdirSync(announcementsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getAnnouncementData(slug: string): Promise<Announcement> {
  const fullPath = path.join(announcementsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const content = processedContent.toString();

  return {
    slug,
    content,
    ...(matterResult.data as Omit<Announcement, 'slug' | 'content'>),
  };
}
