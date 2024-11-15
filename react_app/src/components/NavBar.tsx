'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type MenuItem = {
  name: string;
  path: string;
};

const menuItems: MenuItem[] = [
  { name: "Page d'accueil", path: '/' },
  { name: 'Bibliothèque', path: '/books' },
  { name: 'Liste des auteurs', path: '/authors' },
];

export const NavBar: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="topnav">
      <b>BookISEN</b> {/* Added site name */}
      {menuItems.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className={pathname === item.path ? 'active' : ''}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};