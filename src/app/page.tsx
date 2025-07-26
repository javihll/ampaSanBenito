import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Calendar, Clock, MapPin, Users } from 'lucide-react';
import { announcements, events, services } from '@/lib/data';

export default function Home() {
  const upcomingEvents = events.filter(e => e.type === 'upcoming');
  const recentAnnouncements = announcements.slice(0, 6);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] bg-gradient-to-br from-primary to-green-700 text-primary-foreground flex flex-col justify-center items-center text-center p-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Children playing in a schoolyard"
          data-ai-hint="children schoolyard"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="relative z-10 flex flex-col items-center">
          <div className="bg-white/90 rounded-full p-4 md:p-6 shadow-2xl mb-6">
            <Image
              src="https://ampasanbenito.org/wp-content/uploads/2019/11/logo-ampa-png-circulo-blanco.png"
              alt="AMPA San Benito Logo"
              width={160}
              height={160}
              className="h-24 w-24 md:h-40 md:w-40"
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
                  <p className="text-sm text-muted-foreground">{announcement.date}</p>
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

      {/* Services Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-10">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {services.map((service) => (
              <div key={service.title}>
                <div className="mx-auto bg-primary text-primary-foreground rounded-full h-16 w-16 flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="font-headline text-xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground mt-2">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
