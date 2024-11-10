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
      <main className="flex-grow p-4 bg-gray-100">
        {children}
      </main>
      
      {/* Pied de Page */}
      <footer className="bg-blue-500 text-white p-4 text-center">
      </footer>
    </div>
  );
};