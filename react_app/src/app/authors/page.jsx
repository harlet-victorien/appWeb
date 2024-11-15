"use client";

import React, { useEffect } from 'react';
import Layout from '../../components/Layout';
import { PageTitle } from '../../components/PageTitle';
import { useListAuthorProvider } from '../../providers/useAuthorsProvider';
import CreateAuthorModal from '../../components/CreateAuthorModal';
import { useState } from 'react';


const AuthorsPage = () => {
    const { authorList, loadAuthors } = useListAuthorProvider();
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        console.log('AuthorsPage rendered'); // Log when the component is rendered
        loadAuthors();
    }, []);

    const handleCreateAuthor = () => {
        loadAuthors(); // Refresh the author list after creation
    };

    return (
        <Layout title="Page des Auteurs">
            <main className="flex flex-col items-center justify-center min-h-screen py-2">
                <PageTitle title="Bienvenue sur la Page des Auteurs" />
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="mb-4 px-4 py-2 bg-green-500 text-white rounded-lg"
                >
                    Add Author
                </button>
                <CreateAuthorModal
                    open={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onCreate={handleCreateAuthor}
                />
                <p className="mt-4 text-lg">Cette page affiche la liste des auteurs.</p>
                <ul>
                    {authorList.map((author) => (
                        <li key={author.id}>
                            Prenom : {author.firstName} Nom : {author.lastName} 
                            <img src={author.photoUrl} alt={`${author.firstName} ${author.lastName}`} /> {/* Display photo */}
                        </li>
                    ))}
                </ul>
            </main>
        </Layout>
    );
};

export default AuthorsPage;