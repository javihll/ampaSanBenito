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

          <div className="space-y-8">
            {posts.map((post, index) => {
              const imageRegex = /<Image [^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*width={(\d+)}[^>]*height={(\d+)}[^>]*data-ai-hint="([^"]*)"[^>]*\/>/g;
              const imageMatch = imageRegex.exec(post.content);
              const contentWithoutImage = post.content.replace(imageRegex, '');

              return (
                <Card key={index} className="overflow-hidden shadow-lg">
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription>
                      Publicado el {post.date} por {post.author}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-lg max-w-none text-muted-foreground" dangerouslySetInnerHTML={{ __html: contentWithoutImage }} />
                    {imageMatch && (
                       <div className="my-4">
                        <Image
                            src={imageMatch[1]}
                            alt={imageMatch[2]}
                            width={parseInt(imageMatch[3])}
                            height={parseInt(imageMatch[4])}
                            data-ai-hint={imageMatch[5]}
                            className="rounded-lg"
                        />
                       </div>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
