// src/app/authors/page.jsx
"use client";

import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout.tsx';
import { PageTitle } from '../../components/PageTitle';
import '../../styles/GlobalLayout.css';
import { GlobalLayout } from '../GlobalLayout.tsx';
import { useListBookProvider } from '../../providers/useBooksProviders';
import { Button } from '../../components/Button';

const BooksPage = () => {
    const { bookList, loadBooks, onCreate } = useListBookProvider();
    const [newBookTitle, setNewBookTitle] = useState('');

    useEffect(() => {
        loadBooks();
    }, []);

    const handleAddBook = () => {
        if (newBookTitle.trim()) {
            onCreate({ title: newBookTitle });
            setNewBookTitle('');
        }
    };

    return (
        <GlobalLayout title="Page livre">
            <main className="flex flex-col items-center justify-center min-h-screen py-2">
                <PageTitle title="Bienvenue sur la Page des Livres" />
                <p className="mt-4 text-lg">Cette page affiche la liste des livres.</p>
                <ul>
                    {bookList.map((book) => (
                        <li key={book.id}>{book.title} - ${book.price}</li>
                    ))}
                </ul>
                <div className="mt-4">
                    <input
                        type="text"
                        value={newBookTitle}
                        onChange={(e) => setNewBookTitle(e.target.value)}
                        placeholder="Entrez le titre du livre"
                        className="border p-2"
                        color='black'
                    />
                    <Button onClick={handleAddBook}>
                        Ajouter un livre
                    </Button>
                </div>
            </main>
        </GlobalLayout>
    );
};

export default BooksPage;