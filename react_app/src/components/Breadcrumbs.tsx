import { FC } from 'react';
import Link from 'next/link';

type BreadcrumbsProps = {
  items: { label: string; path: string }[];
};

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ items }) => (
  <nav className="text-gray-700 my-4">
    <ol className="list-reset flex">
      {items.map((item, index) => (
        <li key={item.path} className="flex items-center">
          {index > 0 && <span className="mx-2">/</span>}
          <Link href={item.path} className="text-blue-500 hover:underline">
            {item.label}
          </Link>
        </li>
      ))}
    </ol>
  </nav>
);