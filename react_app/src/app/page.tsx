// src/app/page.tsx
'use client';

import React from 'react';
import { GlobalLayout } from './GlobalLayout';
import '../styles/App.css';
import '../styles/GlobalLayout.css';
import { PageTitle } from '../components/PageTitle';

const HomePage: React.FC = () => {
  return (
    <GlobalLayout title="Page d'accueil">
      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <PageTitle title="Bienvenue sur la Page d'accueil" />
        <p className="mt-4 text-lg">Cette page affiche la liste des auteurs.</p>
      </main>
    </GlobalLayout>
  );
};

export default HomePage;
