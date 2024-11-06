import React, { FC, ReactNode } from 'react';
import { Link } from '../components/Link';

type Props = {
  children: ReactNode;
};

export const GlobalLayout: FC<Props> = ({ children }) => {
  return (
    <div>
      <header className="bg-gray-800 text-white p-4">
        <nav className="flex gap-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/books" className="hover:underline">Books</Link>
          <Link href="/authors" className="hover:underline">Authors</Link>
        </nav>
      </header>
      <main className="p-4">
        {children}
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        © {new Date().getFullYear()} My Book App
      </footer>
    </div>
  );
};