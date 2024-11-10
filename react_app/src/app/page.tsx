// src/app/page.tsx
'use client';

import React from 'react';
import { GlobalLayout } from './GlobalLayout';
import '../styles/App.css';
import '../styles/GlobalLayout.css';

const HomePage: React.FC = () => {
  return (
    <GlobalLayout>
      {/* Removed <main> tag */}
      <h1 className="text-3xl font-bold">Bienvenue sur la Page d'accueil</h1>
    </GlobalLayout>
  );
};

export default HomePage;
