import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { School, Twitter, Facebook, Instagram, Youtube, Send } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/logo-ampa.png" alt="Logo AMPA" width={40} height={40} className="rounded-full" />
              <span className="font-bold text-xl font-headline">AMPA San Benito</span>
            </Link>
            <p className="text-sm">
              Asociación de Madres y Padres de Alumnos del CEIP San Benito.
            </p>
            <div className="flex space-x-1">
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
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-headline font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li>C/ Juan Pérez Zúñiga 36</li>
              <li>28027 Madrid</li>
              <li><a href="mailto:sanbenito@ampasanbenito.org" className="hover:text-primary transition-colors">sanbenito@ampasanbenito.org</a></li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-headline font-semibold mb-4">Enlaces de Interés</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/quienes-somos" className="hover:text-primary transition-colors">Quiénes Somos</Link></li>
              <li><Link href="/huerto" className="hover:text-primary transition-colors">Huerto</Link></li>
               <li><Link href="/bicibus" className="hover:text-primary transition-colors">Bicibús</Link></li>
              <li><Link href="/extraescolares" className="hover:text-primary transition-colors">Extraescolares</Link></li>
              <li><Link href="/hazte-socio" className="hover:text-primary transition-colors">Hazte Socio</Link></li>
              <li><Link href="/contacto" className="hover:text-primary transition-colors">Contacto</Link></li>
               <li><Link href="/aviso-legal" className="hover:text-primary transition-colors">Aviso Legal</Link></li>
              <li><Link href="/politica-de-privacidad" className="hover:text-primary transition-colors">Política de Privacidad</Link></li>
              <li><Link href="/cookies" className="hover:text-primary transition-colors">Política de Cookies</Link></li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-headline font-semibold mb-4">Boletín de Noticias</h4>
            <p className="text-sm mb-2">Recibe las últimas noticias y eventos en tu correo.</p>
            <form className="flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Email" className="bg-background"/>
              <Button type="submit" variant="default" size="icon">
                <Send className="h-4 w-4" />
                <span className="sr-only">Suscribir</span>
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AMPA San Benito. Diseñado con ❤️ para nuestra comunidad.</p>
        </div>
      </div>
    </footer>
  );
}
