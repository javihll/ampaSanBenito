import { notFound } from 'next/navigation';
import Image from 'next/image';
import { announcements } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, User } from 'lucide-react';
import PageSummary from '@/components/page-summary';

export async function generateStaticParams() {
  return announcements.map((announcement) => ({
    slug: announcement.slug,
  }));
}

export default function AnnouncementPage({ params }: { params: { slug: string } }) {
  const announcement = announcements.find((a) => a.slug === params.slug);

  if (!announcement) {
    notFound();
  }

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="font-headline text-3xl md:text-5xl font-bold tracking-tight mb-4">
              {announcement.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{announcement.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{announcement.author}</span>
              </div>
            </div>
          </header>

          <Image
            src={announcement.imageUrl}
            alt={announcement.title}
            data-ai-hint="community people"
            width={1200}
            height={675}
            className="w-full h-auto rounded-lg shadow-lg mb-8"
            priority
          />
          
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: announcement.content }}
          />

          <div className="mt-12 border-t pt-8">
             <PageSummary content={announcement.content} />
          </div>

        </article>
      </div>
    </div>
  );
}
