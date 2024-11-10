// src/app/authors/page.jsx
"use client";

import React from 'react';
import { GlobalLayout } from '../GlobalLayout';

const AuthorsPage = () => {
  return (
    <GlobalLayout>
      {/* Removed <main> tag */}
      <h1 className="text-3xl font-bold">Bienvenue sur la Page des Auteurs</h1>
    </GlobalLayout>
  );
};

export default AuthorsPage;