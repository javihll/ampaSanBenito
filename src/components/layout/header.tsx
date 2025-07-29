import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HeaderClient from './header-client';

export default function Header() {
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
          <span className="hidden sm:inline-block font-bold font-headline">
            AMPA San Benito
          </span>
        </Link>
        <HeaderClient />
      </div>
    </header>
  );
}
