// src/app/authors/page.jsx
"use client";

import React from 'react';
import Layout from '../../components/Layout.tsx';
import { PageTitle } from '../../components/PageTitle';
import '../../styles/GlobalLayout.css';
import { GlobalLayout } from '../GlobalLayout.jsx';

const AuthorsPage = () => {
  return (
    <GlobalLayout title="Page livre">
      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <PageTitle title="Bienvenue sur la Page des Livres" />
        <p className="mt-4 text-lg">Cette page affiche la liste des livres.</p>
      </main>
    </GlobalLayout>
  );
};

export default AuthorsPage;