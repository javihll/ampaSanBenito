"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from "@/components/ui/sheet";
import { Menu, Twitter, Facebook, Instagram, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/quienes-somos", label: "Quiénes Somos" },
  { href: "/extraescolares", label: "Extraescolares" },
  { href: "/huerto", label: "Huerto"},
  { href: "/bicibus", label: "Bicibús"},
  { href: "/contacto", label: "Contacto" },
];

function NavLink({ href, label, className }: { href: string; label: string; className?: string }) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={cn(
        "text-base font-semibold transition-colors hover:text-primary",
        pathname === href ? "text-primary" : "text-foreground",
        className
      )}
    >
      {label}
    </Link>
  );
}

function SocialLinks() {
    return (
        <>
            <Button variant="ghost" size="icon" asChild>
                <Link href="https://x.com/ampa_sanbenito" target="_blank">
                    <span className="sr-only">Twitter</span>
                    <Twitter className="h-6 w-6" />
                </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.facebook.com/LaAmpadelSanBenito/" target="_blank">
                     <span className="sr-only">Facebook</span>
                    <Facebook className="h-6 w-6" />
                </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.instagram.com/ampa_sanbenito/" target="_blank">
                     <span className="sr-only">Instagram</span>
                    <Instagram className="h-6 w-6" />
                </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.youtube.com/channel/UCjeRvtuFfZeA_qSgB82Pwng/featured" target="_blank">
                     <span className="sr-only">Youtube</span>
                    <Youtube className="h-6 w-6" />
                </Link>
            </Button>
        </>
    );
}

export default function HeaderClient() {
    return (
        <>
            <nav className="hidden md:flex gap-6 items-center">
                {navLinks.map((link) => (
                    <NavLink key={link.href} {...link} />
                ))}
            </nav>

            <div className="flex flex-1 items-center justify-end gap-2">
                <div className="hidden sm:flex space-x-1">
                    <SocialLinks />
                </div>
                <Button asChild className="hidden lg:flex bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/hazte-socio">Hazte Socio</Link>
                </Button>

                <Sheet>
                    <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Abrir menú</span>
                    </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <SheetTitle className="sr-only">Menú principal</SheetTitle>
                        <nav className="flex flex-col gap-4 mt-8">
                            {navLinks.map((link) => (
                            <SheetClose asChild key={link.href}>
                                <NavLink {...link} className="py-2 text-lg" />
                            </SheetClose>
                            ))}
                        </nav>
                        <div className="mt-auto space-y-4 pt-8">
                            <SheetClose asChild>
                                <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                                    <Link href="/hazte-socio">Hazte Socio</Link>
                                </Button>
                            </SheetClose>
                            <div className="flex justify-center space-x-2 border-t pt-4">
                                <SocialLinks />
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    );
}
