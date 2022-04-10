import React from 'react';
import Image from 'next/image';

export default function Avatar({name, picture}) {
  return (
    <div className="flex items-center">
      <Image
        src={picture}
        width={50}
        height={50}
        className="w-12 h-12 rounded-full mr-4"
        alt={name}
      />
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
}
