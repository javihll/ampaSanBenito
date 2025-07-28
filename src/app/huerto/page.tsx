import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { posts } from "@/lib/data";

export default function HuertoPage() {
  return (
    <div className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <header className="text-center">
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
              Nuestro Huerto
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Un espacio de aprendizaje, colaboración y contacto con la naturaleza para toda la comunidad educativa.
            </p>
          </header>

          <div className="my-8 flex justify-center">
            <Image
              src="/images/pages/huerto.webp"
              alt="Huerto escolar"
              data-ai-hint="school garden"
              width={900}
              height={506}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-8">
            {posts.map((post, index) => (
              <Card key={index} className="overflow-hidden shadow-lg">
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>
                    Publicado el {post.date} por {post.author}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-lg max-w-none text-muted-foreground" dangerouslySetInnerHTML={{ __html: post.content }} />
                  {post.image && (
                     <div className="my-4">
                      <Image
                          src={post.image.src}
                          alt={post.image.alt}
                          width={post.image.width}
                          height={post.image.height}
                          data-ai-hint={post.image.hint}
                          className="rounded-lg"
                      />
                     </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
