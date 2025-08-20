
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Clock, MapPin } from 'lucide-react';
import { getSortedAnnouncementsData } from '@/lib/announcements';
import { getSortedEventsData } from '@/lib/events';

export default async function Home() {
  const announcements = await getSortedAnnouncementsData();
  const events = await getSortedEventsData();
  
  const upcomingEvents = events.filter(e => e.type === 'upcoming');
  const recentAnnouncements = announcements.slice(0, 6);

  return (
    <div className="flex flex-col">
       {/* Hero Section */}
      <section className="relative w-full h-[90vh] text-primary-foreground flex flex-col justify-center items-center text-center p-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/ampa-san-benito.jpg"
            alt="Children playing in a schoolyard"
            data-ai-hint="children schoolyard"
            fill
            className="object-cover"
            priority
          />
           <div className="absolute inset-0 bg-primary/70 z-10" />
        </div>
        <div className="relative z-20 flex flex-col items-center">
          <div className="bg-white/90 rounded-full p-4 md:p-6 shadow-2xl mb-6">
            <Image
              src="/images/logo-ampa.png"
              alt="AMPA San Benito Logo"
              width={200}
              height={200}
              className="h-48 w-48"
            />
          </div>
          <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter">
            AMPA San Benito
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl">
            Trabajando juntos por la educación y el bienestar de nuestros hijos.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/hazte-socio">¡Hazte Socio!</Link>
          </Button>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-12 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-10">Próximos Eventos</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="flex flex-col md:flex-row items-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col items-center justify-center bg-primary text-primary-foreground rounded-lg p-4 w-full md:w-32 mb-4 md:mb-0 md:mr-6 text-center">
                  <span className="text-4xl font-bold font-headline">{new Date(event.date).getDate()}</span>
                  <span className="text-lg">{new Date(event.date).toLocaleString('es-ES', { month: 'short' })}</span>
                </div>
                <div className="flex-grow text-center md:text-left">
                  <h3 className="font-headline text-2xl font-semibold">{event.title}</h3>
                  <p className="text-muted-foreground mt-1">{event.description}</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 text-sm text-muted-foreground mt-3">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-accent" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-accent" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-10">Últimas Noticias</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentAnnouncements.map((announcement) => (
              <Card key={announcement.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={announcement.imageUrl}
                  alt={announcement.title}
                  data-ai-hint="community event"
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <p className="text-sm text-muted-foreground">{new Date(announcement.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                  <CardTitle className="font-headline text-xl h-16">{announcement.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{announcement.excerpt}</p>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button asChild variant="link" className="p-0 h-auto">
                    <Link href={`/anuncios/${announcement.slug}`} className="font-bold text-primary">
                      Leer más <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
           <div className="text-center mt-12">
              <Button size="lg" variant="outline" asChild>
                  <Link href="/anuncios">
                      Ver todas las noticias
                  </Link>
              </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
