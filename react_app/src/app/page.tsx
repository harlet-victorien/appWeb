// src/app/page.tsx
'use client';

import React from 'react';
import { GlobalLayout } from './GlobalLayout';
import '../styles/App.css';
import '../styles/GlobalLayout.css';

const HomePage: React.FC = () => {
  return (
    <GlobalLayout>
      <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-bold">Bienvenue sur la Page d'accauil'</h1>
      </main>
    </GlobalLayout>
  );
};

export default HomePage;
