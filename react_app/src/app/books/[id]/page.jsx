"use client";

import React, { useState, useEffect } from 'react';
import { GlobalLayout } from '../../GlobalLayout';
import { useParams, useRouter } from 'next/navigation';
import { useListBookProvider } from '../../../providers/useBooksProviders';
import Link from 'next/link';
import DeleteBookModal from '../../../components/DeleteBookModal';

const BookDetailPage = () => {
    const params = useParams();
    const { id } = params;
    const router = useRouter();
    const { book, loadBooksid, onDelete } = useListBookProvider();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    useEffect(() => {
        const fetchBook = async () => {
            try {
                await loadBooksid(id);
            } catch (err) {
                setError('Livre non trouvé.');
            } finally {
                setLoading(false);
            }
        };

        fetchBook();
    }, [id]);

    const handleDelete = async () => {
        try {
            await onDelete(id);
            router.push('/books');
        } catch (err) {
            console.error('Failed to delete book:', err);
            alert('Failed to delete book');
        }
    };

    if (loading) {
        return (
            <GlobalLayout title="Detail du livre">
                <main className="flex flex-col items-center justify-center min-h-screen py-4 px-6">
                    <p className="text-gray-500">Chargement...</p>
                </main>
            </GlobalLayout>
        );
    }

    if (error) {
        return (
            <GlobalLayout title="Detail du livre">
                <main className="flex flex-col items-center justify-center min-h-screen py-4 px-6">
                    <p className="text-red-500">{error}</p>
                    <button
                        onClick={() => router.push('/books')}
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Retour à la liste des livres
                    </button>
                </main>
            </GlobalLayout>
        );
    }

    if (!book) {
        return (
            <GlobalLayout title="Detail du livre">
                <main className="flex flex-col items-center justify-center min-h-screen py-4 px-6">
                    <p className="text-gray-500">Livre non trouvé.</p>
                    <button
                        onClick={() => router.push('/books')}
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Retour à la liste des livres
                    </button>
                </main>
            </GlobalLayout>
        );
    }

    return (
        <GlobalLayout title={`Detail du livre: ${book.title}`}>
            <main className="flex flex-col items-start justify-start min-h-screen py-4 px-6">
                <h1 className="text-4xl font-bold mb-6">Detail du livre: {book.title}</h1>
                <div className="space-y-4">
                    <p>
                        <strong>Titre du livre:</strong> {book.title}
                    </p>
                    <p>
                        <strong>Prix:</strong> {book.price ? `${book.price} €` : 'Non disponible'}
                    </p>
                    <p>
                        <strong>Année de publication:</strong> {book.yearPublished ? book.yearPublished : 'Non disponible'}
                    </p>
                    <Link href={`/authors/${book.author.id}`}>
                    <p>
                        <strong>Nom de l’auteur:</strong>{' '}
                        {book.author
                            ? `${book.author.firstName} ${book.author.lastName}`
                            : 'Auteur inconnu'}
                    </p>
                    </Link>
                </div>
                <div className="flex space-x-4 mt-6">
                    <button
                        onClick={() => router.push('/books')}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Retour à la liste des livres
                    </button>
                    <button
                        onClick={() => setIsDeleteModalOpen(true)}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                        Delete Book
                    </button>
                </div>
                <DeleteBookModal
                    open={isDeleteModalOpen}
                    onClose={() => setIsDeleteModalOpen(false)}
                    onDelete={handleDelete}
                />
            </main>
        </GlobalLayout>
    );
};

export default BookDetailPage;