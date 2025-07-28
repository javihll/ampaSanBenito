import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { posts } from "@/lib/data";

function PostContent({ content }: { content: string }) {
  const imageRegex = /<Image [^>]*\/>/g;
  const parts = content.split(imageRegex);
  const matches = content.match(imageRegex) || [];

  return (
    <div className="prose prose-lg max-w-none text-muted-foreground">
      {parts.map((part, index) => {
        const imageMatch = matches[index];
        let imageElement = null;
        if (imageMatch) {
            const srcMatch = imageMatch.match(/src="([^"]*)"/);
            const altMatch = imageMatch.match(/alt="([^"]*)"/);
            const widthMatch = imageMatch.match(/width={(\d+)}/);
            const heightMatch = imageMatch.match(/height={(\d+)}/);
            const hintMatch = imageMatch.match(/data-ai-hint="([^"]*)"/);

            if (srcMatch && altMatch && widthMatch && heightMatch) {
                imageElement = (
                    <div className="my-4">
                        <Image
                            src={srcMatch[1]}
                            alt={altMatch[1]}
                            width={parseInt(widthMatch[1])}
                            height={parseInt(heightMatch[1])}
                            data-ai-hint={hintMatch ? hintMatch[1] : ''}
                            className="rounded-lg"
                        />
                    </div>
                );
            }
        }

        return (
          <React.Fragment key={index}>
            <div dangerouslySetInnerHTML={{ __html: part }} />
            {imageElement}
          </React.Fragment>
        );
      })}
    </div>
  );
}


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
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
