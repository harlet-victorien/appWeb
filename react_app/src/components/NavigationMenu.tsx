'use client';
import React from 'react';
import Link from 'next/link';

type MenuItem = {
  name: string;
  path: string;
};

const menuItems: MenuItem[] = [
  { name: "Page d'accueil", path: '/' },
  { name: 'Liste des livres', path: '/books' },
  { name: 'Liste des auteurs', path: '/authors' },
];

export const NavigationMenu: React.FC = () => (
  <nav className="w-full bg-purple-200 z-50">
    <ul className="flex justify-center space-x-4 p-4"> {/* Ensure horizontal alignment */}
      {menuItems.map((item: MenuItem) => (
        <li key={item.path} className="inline-block"> {/* Ensure items are inline */}
          <Link href={item.path} className="text-gray-800 hover:text-gray-600">
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);