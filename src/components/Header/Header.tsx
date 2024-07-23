import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <header className="bg-gray-100 text-center pt-12 pb-6 border-b-2 space-y-6">
      <Link href="/">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">moytus.dev</h1>
      </Link>
    </header>
  );
}
