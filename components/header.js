import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <h4 className="text-sm md:text-sm font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/">
        <a className="hover:underline">Back</a>
      </Link>
    </h4>
  );
}
