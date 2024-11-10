// src/app/GlobalLayout.tsx
'use client';
import React, { FC, ReactElement } from 'react';
import { useRouter } from 'next/navigation';
import { NavigationMenu } from '../components/NavigationMenu';
import { Button } from '../components/Button';

type Props = {
  children: ReactElement | ReactElement[];
};

export const GlobalLayout: FC<Props> = ({ children }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Entête */}
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-4xl text-center">Titre de l'Application</h1>
      </header>
      
      {/* Menu de Navigation */}
      <NavigationMenu />
      
      {/* Boutons de Navigation */}
      <div className="flex justify-center space-x-4 p-4 bg-blue-100">
        <Button onClick={() => router.push('/')}>Home</Button>
        <Button onClick={() => router.push('/books')}>Books</Button>
        <Button onClick={() => router.push('/authors')}>Authors</Button>
      </div>

      {/* Contenu Principal */}
      <main className="flex-grow p-4 bg-gray-100">
        {children}
      </main>
      
      {/* Pied de Page */}
      <footer className="bg-blue-500 text-white p-4 text-center">
        &copy; 2023 Votre Entreprise
      </footer>
    </div>
  );
};