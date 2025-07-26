import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { School, Twitter, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <School className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl font-headline">AMPA San Benito</span>
            </Link>
            <p className="text-sm">
              Asociación de Madres y Padres de Alumnos del CEIP San Benito.
            </p>
            <div className="flex space-x-4">
                <Button variant="ghost" size="icon" asChild>
                  <Link href="https://x.com/ampa_sanbenito" target="_blank">
                    <Twitter className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="https://www.facebook.com/LaAmpadelSanBenito/" target="_blank">
                    <Facebook className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="https://www.instagram.com/ampa_sanbenito/" target="_blank">
                    <Instagram className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="https://www.youtube.com/channel/UCjeRvtuFfZeA_qSgB82Pwng/featured" target="_blank">
                    <Youtube className="h-5 w-5" />
                  </Link>
                </Button>
            </div>
          </div>
          <div>
            <h4 className="font-headline font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/anuncios" className="hover:text-primary transition-colors">Anuncios</Link></li>
              <li><Link href="/eventos" className="hover:text-primary transition-colors">Eventos</Link></li>
              <li><Link href="/servicios" className="hover:text-primary transition-colors">Servicios</Link></li>
              <li><Link href="/contacto" className="hover:text-primary transition-colors">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li>C/ Juan Pérez Zúñiga 36</li>
              <li>28027 Madrid</li>
              <li><a href="mailto:sanbenito@ampasanbenito.org" className="hover:text-primary transition-colors">sanbenito@ampasanbenito.org</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-semibold mb-4">Suscríbete</h4>
            <p className="text-sm mb-2">Recibe las últimas noticias y eventos en tu correo.</p>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Email" className="bg-background"/>
              <Button type="submit" variant="default">Suscribir</Button>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AMPA San Benito. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
