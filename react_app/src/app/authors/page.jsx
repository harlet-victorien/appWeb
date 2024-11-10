// src/app/authors/page.jsx
"use client";

import React from 'react';
import Layout from '../../components/Layout';

const AuthorsPage = () => {
  return (
    <Layout title="Liste des Auteurs">
      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold">Bienvenue sur la Page des Auteurs</h1>
        <p className="mt-4 text-lg">Cette page affiche la liste des auteurs.</p>
      </main>
    </Layout>
  );
};

export default AuthorsPage;