import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Calendar, User } from 'lucide-react';
import { getAnnouncementData, getAllAnnouncementSlugs } from '@/lib/announcements';
import type { Metadata } from 'next';

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const announcement = await getAnnouncementData(params.slug);

  if (!announcement) {
    return {
      title: "Anuncio no encontrado",
    }
  }
 
  return {
    title: announcement.title,
    description: announcement.excerpt,
  }
}

export async function generateStaticParams() {
  const paths = await getAllAnnouncementSlugs();
  return paths.map(p => ({ slug: p.params.slug }));
}

export default async function AnnouncementPage({ params }: { params: { slug: string } }) {
  const announcement = await getAnnouncementData(params.slug);

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
                <span>{new Date(announcement.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
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

        </article>
      </div>
    </div>
  );
}
