// src/app/GlobalLayout.tsx
'use client';
import React, { FC, ReactElement } from 'react';
import '../styles/GlobalLayout.css';
import '../styles/App.css';
import { NavBar } from '../components/NavBar';

type Props = {
  children: ReactElement | ReactElement[];
};

export const GlobalLayout: FC<Props> = ({ children }) => {
  return (
    <div className="App-header"> {/* Updated class name */}
      {/* Navigation Bar */}
      <NavBar />

      {/* Entête */}

      
      {/* Contenu Principal */}
      <main className="flex-grow bg-gray-800 text-white"> {/* Removed padding and adjusted classes */}
        {children}
      </main>
      
      {/* Pied de Page */}
      <footer className="text-white p-4 text-center">
      </footer>
    </div>
  );
};