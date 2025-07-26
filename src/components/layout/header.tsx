"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Twitter, Facebook, Instagram, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/quienes-somos", label: "Quiénes Somos" },
  { href: "/extraescolares", label: "Extraescolares" },
  { href: "/huerto", label: "Huerto"},
  { href: "/bicibus", label: "Bicibús"},
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Add this block to fix hydration mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder or null to avoid rendering on the server
    // that doesn't match the client.
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                   <Image
                      src="https://ampasanbenito.org/wp-content/uploads/2019/11/logo-ampa-png-circulo-blanco.png"
                      alt="AMPA San Benito Logo"
                      width={40}
                      height={40}
                      className="bg-primary rounded-full"
                    />
                  <span className="hidden font-bold sm:inline-block font-headline">AMPA San Benito</span>
                </Link>
            </div>
        </header>
    );
  }
  // End of block

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary",
        pathname === href ? "text-primary" : "text-muted-foreground"
      )}
      onClick={() => setIsMobileMenuOpen(false)}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 mr-4">
           <Image
              src="https://ampasanbenito.org/wp-content/uploads/2019/11/logo-ampa-png-circulo-blanco.png"
              alt="AMPA San Benito Logo"
              width={40}
              height={40}
              className="bg-primary rounded-full"
            />
          <span className="hidden font-bold sm:inline-block font-headline">AMPA San Benito</span>
        </Link>
        
        <nav className="hidden md:flex gap-6 items-center flex-grow">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2">
           <div className="hidden sm:flex space-x-1">
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
          <Button asChild className="hidden lg:flex bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/hazte-socio">Hazte Socio</Link>
          </Button>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col gap-6 p-6">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                   <Image
                      src="https://ampasanbenito.org/wp-content/uploads/2019/11/logo-ampa-png-circulo-blanco.png"
                      alt="AMPA San Benito Logo"
                      width={40}
                      height={40}
                      className="bg-primary rounded-full"
                    />
                  <span className="font-bold font-headline">AMPA San Benito</span>
                </Link>
                <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <NavLink key={link.href} {...link} />
                    ))}
                </nav>
                <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90" onClick={() => setIsMobileMenuOpen(false)}>
                    <Link href="/hazte-socio">Hazte Socio</Link>
                </Button>
                <div className="flex justify-center space-x-2 border-t pt-6">
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
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
