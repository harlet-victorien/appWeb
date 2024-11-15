"use client";

import React, { useState, useEffect } from 'react';
import { GlobalLayout } from '../../GlobalLayout';
import { useParams, useRouter } from 'next/navigation';
import { useListAuthorProvider } from '../../../providers/useAuthorsProvider';

const AuthorDetailPage = () => {
    const params = useParams();
    const { id } = params;
    const router = useRouter();
    const { author, loadAuthorById } = useListAuthorProvider();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAuthor = async () => {
            try {
                await loadAuthorById(id);
            } catch (err) {
                setError('Auteur non trouvé.');
            } finally {
                setLoading(false);
            }
        };

        fetchAuthor();
    }, [id]);

    if (loading) {
        return (
            <GlobalLayout title="Detail de l'auteur">
                <main className="flex flex-col items-center justify-center min-h-screen py-4 px-6">
                    <p className="text-gray-500">Chargement...</p>
                </main>
            </GlobalLayout>
        );
    }

    if (error) {
        return (
            <GlobalLayout title="Detail de l'auteur">
                <main className="flex flex-col items-center justify-center min-h-screen py-4 px-6">
                    <p className="text-red-500">{error}</p>
                    <button
                        onClick={() => router.push('/authors')}
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Retour à la liste des auteurs
                    </button>
                </main>
            </GlobalLayout>
        );
    }

    if (!author) {
        return (
            <GlobalLayout title="Detail de l'auteur">
                <main className="flex flex-col items-center justify-center min-h-screen py-4 px-6">
                    <p className="text-gray-500">Auteur non trouvé.</p>
                    <button
                        onClick={() => router.push('/authors')}
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Retour à la liste des auteurs
                    </button>
                </main>
            </GlobalLayout>
        );
    }

    return (
        <GlobalLayout title={`Detail de l'auteur: ${author.firstName} ${author.lastName}`}>
            <main className="flex flex-col items-start justify-start min-h-screen py-4 px-6">
                <h1 className="text-4xl font-bold mb-6">Detail de l'auteur: {author.firstName} {author.lastName}</h1>
                <div className="space-y-4">
                    <p>
                        <strong>Nom de l'auteur:</strong> {author.firstName} {author.lastName}
                    </p>
                    <img src={author.photoUrl} alt={`${author.firstName} ${author.lastName}`} className="h-64 mb-2" />
                    <p>
                        <strong>Nombre de livres écrits:</strong> {author.bookCount}
                    </p>
                    <p>
                        <strong>Biographie:</strong> {author.biography}
                    </p>
                </div>
                <button
                    onClick={() => router.push('/authors')}
                    className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Retour à la liste des auteurs
                </button>
            </main>
        </GlobalLayout>
    );
};

export default AuthorDetailPage;