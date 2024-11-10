// src/app/authors/page.jsx
"use client";

import React from 'react';
import Layout from '../../components/Layout';
import { GlobalLayout } from '../GlobalLayout';

const AuthorsPage = () => {
  return (
    <GlobalLayout>
      <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-bold">Bienvenue sur la Page des Auteurs</h1>
      </main>
    </GlobalLayout>
  );
};

export default AuthorsPage;