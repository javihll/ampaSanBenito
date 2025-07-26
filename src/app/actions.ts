'use server';
import { summarize } from '@/ai/flows/summarize';

export async function summarizePage(content: string): Promise<string | null> {
  if (!content) {
    return null;
  }
  
  try {
    const summary = await summarize(content);
    return summary;
  } catch (error) {
    console.error('Error summarizing page:', error);
    // In a real app, you might want to log this error to a monitoring service
    return null;
  }
}
