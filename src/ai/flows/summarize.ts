'use server';

import {ai} from '../genkit';
import {z} from 'zod';

export const summarize = ai.defineFlow(
  {
    name: 'summarize',
    inputSchema: z.string(),
    outputSchema: z.string(),
  },
  async (content) => {
    const llmResponse = await ai.generate({
      prompt: `Summarize the following text for a parent-teacher association website. Keep it concise, in Spanish, and easy to understand for parents:\n\n${content}`,
      model: 'googleai/gemini-1.5-flash',
      config: {
        temperature: 0.5,
      }
    });
    return llmResponse.text;
  }
);