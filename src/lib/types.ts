import type { LucideIcon } from 'lucide-react';

export interface Announcement {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  date: string;
  author: string;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  type: 'upcoming' | 'recent' | 'past';
}

export interface Service {
    title: string;
    description: string;
    icon: LucideIcon;
}

export interface Post {
    title: string;
    date: string;
    author: string;
    content: string;
}
