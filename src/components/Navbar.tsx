import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Logo from '../../public/images/logo.png';

const links = [
  {
    text: 'HACKER HOUSE',
    link: '/',
  },
  {
    text: 'ACCELERATOR',
    link: '/',
  },
  {
    text: 'CO-LEARNING CAMP',
    link: '/',
  },
  {
    text: 'Chat-Programming',
    link: '/',
  },
  {
    text: 'PARTNERS',
    link: '/',
  },
];

export default function Navbar() {
  return (
    <div className="navbar border-b border-black px-14 py-5 flex justify-between">
      <Link href="/">
        <Image className="w-[120px]" src={Logo} alt="Logo" />
      </Link>
      <div className="links flex gap-x-12 items-center">
        {links.map((link) => (
          <Link href={link.link} key={link.text} className="font-ps2p text-xs font-bold">
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );
}
