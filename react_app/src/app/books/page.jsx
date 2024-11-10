// src/app/authors/page.jsx
"use client";

import React from 'react';
import Layout from '../../components/Layout';
import { PageTitle } from '../../components/PageTitle';
import '../../styles/GlobalLayout.css';

const AuthorsPage = () => {
  return (
    <Layout title="Page livre">
      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <PageTitle title="Bienvenue sur la Page des Livres" />
        <p className="mt-4 text-lg">Cette page affiche la liste des auteurs.</p>
      </main>
    </Layout>
  );
};

export default AuthorsPage;