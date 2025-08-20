
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HeaderClient from './header-client';

export default function Header() {

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 mr-4">
          <Image
            src="/images/logo-ampa.png"
            alt="AMPA San Benito Logo"
            width={48}
            height={48}
            className="rounded-full"
          />
           <span className="font-headline text-xl font-bold tracking-tight hidden sm:inline-block">AMPA San Benito</span>
        </Link>
        
        <HeaderClient />
        
      </div>
    </header>
  );
}
