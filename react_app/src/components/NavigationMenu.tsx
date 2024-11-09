
'use client';
import Link from 'next/link';

type MenuItem = {
  name: string;
  path: string;
};
// mettre le lien des pages ( tester avec des pages qui n'existent plus)
const menuItems: MenuItem[] = [
  { name: "Page d'accueil", path: '/' },
  { name: 'Liste des livres', path: '/livres' },
  { name: 'Liste des auteurs', path: '/auteurs' },
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