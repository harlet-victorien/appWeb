'use client';
import React from 'react';
import Link from 'next/link';

type MenuItem = {
  name: string;
  path: string;
};

const menuItems: MenuItem[] = [
  { name: "Page d'accueil", path: '/' },
  { name: 'Liste des livres', path: '/books' }, // Updated path from '/book' to '/books'
  { name: 'Liste des auteurs', path: '/authors' },
];

export const NavigationMenu: React.FC = () => (
  <nav className="fixed top-0 left-0 w-full bg-purple-200 z-50">
    <ul className="flex justify-center space-x-4 p-4">
      {menuItems.map((item: MenuItem) => (
        <li key={item.path}>
          <Link href={item.path} className="text-gray-800 hover:text-gray-600">
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);