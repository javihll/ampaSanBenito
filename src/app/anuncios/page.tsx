'use client';
import React, { Suspense, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from '@/components/ui/pagination';
import { getSortedAnnouncementsData } from '@/lib/announcements';
import { useState, useEffect } from 'react';
import type { Announcement } from '@/lib/types';
import { Skeleton } from '@/components/ui/skeleton';

const ITEMS_PER_PAGE = 6;

function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => (
        <Card key={i} className="flex flex-col overflow-hidden shadow-lg">
          <Skeleton className="w-full h-48" />
          <CardHeader>
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-2/3" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full mt-2" />
            <Skeleton className="h-4 w-1/2 mt-2" />
          </CardContent>
          <div className="p-6 pt-0">
            <Skeleton className="h-5 w-24" />
          </div>
        </Card>
      ))}
    </div>
  );
}

function AnnouncementsContent() {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const [announcements, setAnnouncements] = useState<(Omit<Announcement, 'content'>)[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const sortedAnnouncements = await getSortedAnnouncementsData();
      setAnnouncements(sortedAnnouncements);
      setLoading(false);
    }
    fetchData();
  }, []);

  const totalPages = Math.ceil(announcements.length / ITEMS_PER_PAGE);

  const paginatedAnnouncements = announcements.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const getPaginationItems = () => {
    const items = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink href={`?page=${i}`} isActive={i === currentPage}>
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          items.push(
            <PaginationItem key={i}>
              <PaginationLink href={`?page=${i}`} isActive={i === currentPage}>
                {i}
              </PaginationLink>
            </PaginationItem>
          );
        }
        items.push(<PaginationEllipsis key="ellipsis-start" />);
        items.push(
          <PaginationItem key={totalPages}>
            <PaginationLink href={`?page=${totalPages}`}>{totalPages}</PaginationLink>
          </PaginationItem>
        );
      } else if (currentPage >= totalPages - 2) {
        items.push(
          <PaginationItem key={1}>
            <PaginationLink href="?page=1">1</PaginationLink>
          </PaginationItem>
        );
        items.push(<PaginationEllipsis key="ellipsis-end" />);
        for (let i = totalPages - 3; i <= totalPages; i++) {
          items.push(
            <PaginationItem key={i}>
              <PaginationLink href={`?page=${i}`} isActive={i === currentPage}>
                {i}
              </PaginationLink>
            </PaginationItem>
          );
        }
      } else {
        items.push(
          <PaginationItem key={1}>
            <PaginationLink href="?page=1">1</PaginationLink>
          </PaginationItem>
        );
        items.push(<PaginationEllipsis key="ellipsis-prev" />);
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          items.push(
            <PaginationItem key={i}>
              <PaginationLink href={`?page=${i}`} isActive={i === currentPage}>
                {i}
              </PaginationLink>
            </PaginationItem>
          );
        }
        items.push(<PaginationEllipsis key="ellipsis-next" />);
        items.push(
          <PaginationItem key={totalPages}>
            <PaginationLink href={`?page=${totalPages}`}>{totalPages}</PaginationLink>
          </PaginationItem>
        );
      }
    }
    return items;
  };

  if (loading) {
     return <LoadingSkeleton />;
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedAnnouncements.map((announcement) => (
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

      <div className="mt-16">
        <Pagination>
          <PaginationContent>
            {currentPage > 1 && (
              <PaginationItem>
                <PaginationPrevious href={`?page=${currentPage - 1}`} />
              </PaginationItem>
            )}
            {getPaginationItems()}
            {currentPage < totalPages && (
               <PaginationItem>
                  <PaginationNext href={`?page=${currentPage + 1}`} />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
}

export default function AnnouncementsPage() {
  return (
    <div className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
                Anuncios
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
                Todas nuestras noticias y comunicaciones.
            </p>
        </header>
        
        <Suspense fallback={<LoadingSkeleton />}>
          <AnnouncementsContent />
        </Suspense>

      </div>
    </div>
  );
}