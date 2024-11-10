// src/app/page.tsx
'use client';

import React from 'react';
import { GlobalLayout } from './GlobalLayout';
import '../styles/App.css';

const HomePage: React.FC = () => {
  return (
    <GlobalLayout>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
        <h2 className="text-5xl text-center mb-4">Bonjour, Victor!</h2>
        <p className="text-xl text-center">Bienvenue sur la page d'accueil de notre site web.</p>
      </div>
    </GlobalLayout>
  );
};

export default HomePage;
