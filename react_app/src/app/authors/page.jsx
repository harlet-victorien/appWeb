"use client";

import React, { useEffect } from 'react';
import Layout from '../../components/Layout';
import { PageTitle } from '../../components/PageTitle';
import { useListAuthorProvider } from '../../providers/useAuthorsProvider';

const AuthorsPage = () => {
    const { authorList, loadAuthors } = useListAuthorProvider();

    useEffect(() => {
        console.log('AuthorsPage rendered'); // Log when the component is rendered
        loadAuthors();
    }, []);

    return (
        <Layout title="Page des Auteurs">
            <main className="flex flex-col items-center justify-center min-h-screen py-2">
                <PageTitle title="Bienvenue sur la Page des Auteurs" />
                <p className="mt-4 text-lg">Cette page affiche la liste des auteurs.</p>
                <ul>
                    {authorList.map((author) => (
                        <li key={author.id}>Prenom : {author.firstName} Nom : {author.lastName} Photo : {author.photo}</li>
                    ))}
                </ul>
            </main>
        </Layout>
    );
};

export default AuthorsPage;