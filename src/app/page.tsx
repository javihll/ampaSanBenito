
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import { ArrowRight, Clock, MapPin, Sparkles, PartyPopper, GraduationCap, Users } from 'lucide-react';
import { getSortedAnnouncementsData } from '@/lib/announcements';
import { getSortedEventsData } from '@/lib/events';
import Autoplay from "embla-carousel-autoplay"
import * as React from "react"
import { useEffect, useState } from 'react';
import type { Event } from '@/lib/types';


export default function Home() {
  const [announcements, setAnnouncements] = useState<Awaited<ReturnType<typeof getSortedAnnouncementsData>>>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])
  
  useEffect(() => {
    getSortedAnnouncementsData().then(setAnnouncements);
    getSortedEventsData().then(setEvents);
  }, []);

  const upcomingEvents = events.filter(e => e.type === 'upcoming');
  const recentAnnouncements = announcements.slice(0, 6);

  const eventIcons: { [key: string]: React.ElementType } = {
    'Asamblea General de Socios': Users,
    'Fiesta Fin de Curso': PartyPopper,
    'Inicio del Curso 2024-2025': GraduationCap,
    'Jornada de Deporte en Familia': PartyPopper,
    'default': PartyPopper,
  };

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  return (
    <div className="flex flex-col">
       {/* Hero Section */}
      <section className="relative w-full min-h-screen text-primary-foreground flex flex-col items-center p-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/ampa-san-benito.jpg"
            alt="Niños jugando en el patio del colegio"
            data-ai-hint="children schoolyard"
            fill
            className="object-cover"
            priority
          />
           <div className="absolute inset-0 bg-primary/60 z-10" />
        </div>
        <div className="relative z-20 flex flex-col items-center pt-6 pb-12">
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 md:p-5 shadow-2xl mb-6">
            <Image
              src="/images/logo-ampa.png"
              alt="AMPA San Benito Logo"
              width={160}
              height={160}
              className="h-24 w-24 md:h-40 md:w-40"
              priority
            />
          </div>
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter drop-shadow-lg max-w-4xl text-center">
            AMPA San Benito
          </h1>
          <p className="mt-4 max-w-4xl text-lg md:text-xl font-semibold drop-shadow-md text-center">
            Trabajando juntos por una educación divertida, inclusiva y llena de aventuras.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 rounded-full text-lg font-bold px-8 py-6 shadow-lg transform hover:scale-105 transition-transform">
            <Link href="/hazte-socio">
              <Sparkles className="mr-2 h-5 w-5" />
              ¡Únete a la aventura!
            </Link>
          </Button>

          {upcomingEvents.length > 0 && (
            <div className="mt-12 w-full max-w-sm md:max-w-md mx-auto">
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6 text-center">Próximos Eventos</h2>
              <Carousel
                setApi={setApi}
                plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                opts={{
                  align: "center",
                  loop: upcomingEvents.length > 1,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {upcomingEvents.map((event) => {
                    const Icon = eventIcons[event.title] || eventIcons.default;
                    return (
                      <CarouselItem key={event.id} className="basis-full">
                          <Card className="bg-background/50 border-border backdrop-blur-md text-left text-foreground overflow-hidden h-full">
                            <CardHeader className="flex flex-row items-center gap-4 p-4">
                              <div className="flex flex-col items-center justify-center bg-primary text-primary-foreground rounded-lg p-3 w-20 h-20 text-center">
                                  <Icon className="h-6 w-6 mb-1 text-primary-foreground" />
                                  <span className="text-2xl font-bold font-headline">{new Date(event.date).getDate()}</span>
                                  <span className="text-sm uppercase">{new Date(event.date).toLocaleString('es-ES', { month: 'short' })}</span>
                              </div>
                              <div>
                                  <CardTitle className="font-headline text-lg mb-1">{event.title}</CardTitle>
                                  <p className="text-sm text-foreground/80">{event.description}</p>
                              </div>
                            </CardHeader>
                            <CardContent className="p-4 pt-0">
                              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-foreground/90">
                                  <div className="flex items-center gap-2">
                                      <Clock className="h-4 w-4 text-primary" />
                                      <span>{event.time}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                      <MapPin className="h-4 w-4 text-primary" />
                                      <span>{event.location}</span>
                                  </div>
                              </div>
                            </CardContent>
                          </Card>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
              </Carousel>
               {api && count > 1 && (
                <div className="flex justify-center gap-2 mt-4">
                  {Array.from({ length: count }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => api.scrollTo(index)}
                      className={`h-2 w-6 rounded-full ${
                        current === index + 1 ? 'bg-primary' : 'bg-primary/50'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
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
