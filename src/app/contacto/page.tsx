import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail, MapPin, Phone, Twitter, Facebook, Instagram, Youtube, Users } from "lucide-react";
import Image from "next/image";

export default function ContactoPage() {
  return (
    <div className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <header className="text-center">
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
              Contacto
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Estamos aquí para ayudarte. Ponte en contacto con nosotros a través de cualquiera de los siguientes canales.
            </p>
          </header>

          <div className="my-8 flex justify-center">
            <Image
                src="/images/pages/contacto.webp"
                alt="Contacto"
                data-ai-hint="contact us"
                width={900}
                height={506}
                className="w-1/2 h-auto rounded-lg shadow-lg"
            />
           </div>

          <Card className="overflow-hidden shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <MapPin className="h-8 w-8 text-primary" />
                <span>Nuestra Ubicación</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-muted-foreground">
                CEIP San Benito
              </p>
              <p className="text-lg font-semibold">
                C/ Juan Pérez Zúñiga 36<br />
                28027 Madrid
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Mail className="h-8 w-8 text-primary" />
                <span>Correo Electrónico</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">Para consultas generales, por favor, escríbenos a:</p>
              <a href="mailto:sanbenito@ampasanbenito.org" className="text-primary text-lg font-semibold hover:underline">
                sanbenito@ampasanbenito.org
              </a>
            </CardContent>
          </Card>

          <Card className="overflow-hidden shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Users className="h-8 w-8 text-primary" />
                <span>Redes Sociales</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">
               <Button variant="outline" asChild>
                  <Link href="https://x.com/ampa_sanbenito" target="_blank" className="flex items-center gap-2">
                    <Twitter className="h-5 w-5" />
                    <span>Twitter / X</span>
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://www.facebook.com/LaAmpadelSanBenito/" target="_blank" className="flex items-center gap-2">
                    <Facebook className="h-5 w-5" />
                    <span>Facebook</span>
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://www.instagram.com/ampa_sanbenito/" target="_blank" className="flex items-center gap-2">
                    <Instagram className="h-5 w-5" />
                     <span>Instagram</span>
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://www.youtube.com/channel/UCjeRvtuFfZeA_qSgB82Pwng/featured" target="_blank" className="flex items-center gap-2">
                    <Youtube className="h-5 w-5" />
                    <span>Youtube</span>
                  </Link>
                </Button>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}
