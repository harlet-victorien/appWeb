// src/app/books/page.jsx
"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { GlobalLayout } from '../GlobalLayout.tsx';
import { useListBookProvider } from '../../providers/useBooksProviders';
import { Button } from '../../components/Button';

const BooksPage = () => {
    const { bookList, loadBooks, onCreate } = useListBookProvider();
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filterCriteria, setFilterCriteria] = useState({
        author: '',
        price: '',
        yearPublished: '',
    });

    useEffect(() => {
        loadBooks();
    }, []);

    // Utilisation de useMemo pour optimiser le filtrage
    const filteredBookList = useMemo(() => {
        return bookList.filter((book) => {
            const matchesTitle = book.title.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesAuthor =
                filterCriteria.author === '' ||
                (book.author &&
                    (`${book.author.firstName} ${book.author.lastName}`
                        .toLowerCase()
                        .includes(filterCriteria.author.toLowerCase())));
            const matchesPrice =
                filterCriteria.price === '' ||
                book.price === parseFloat(filterCriteria.price);
            const matchesYear =
                filterCriteria.yearPublished === '' ||
                book.yearPublished === parseInt(filterCriteria.yearPublished);
            return matchesTitle && matchesAuthor && matchesPrice && matchesYear;
        });
    }, [bookList, searchTerm, filterCriteria]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilterCriteria((prev) => ({ ...prev, [name]: value }));
    };

    const handleApplyFilters = () => {
        setIsModalOpen(false);
    };

    const handleResetFilters = () => {
        setFilterCriteria({
            author: '',
            price: '',
            yearPublished: '',
        });
    };

    return (
        <GlobalLayout title="Page livre">
            <main className="flex flex-col items-start justify-start min-h-screen py-4 px-6">
                <h1 className="text-4xl font-bold mb-6">Bienvenue dans votre bibliothèque</h1>

                {/* Barre de Recherche et Bouton Filtrer */}
                <div className="w-full mb-8 flex items-center space-x-4">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Rechercher un livre"
                        className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-500"
                    />
                    <Button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                        aria-label="Filtrer les livres"
                    >
                        +
                    </Button>
                </div>

                {/* Liste des Livres Filtrée */}
                {filteredBookList.length === 0 ? (
                    <p className="text-gray-500">Aucun livre trouvé.</p>
                ) : (
                    <div className="flex flex-wrap gap-6 w-full">
                        {filteredBookList.map((book) => (
                            <div
                                key={book.id}
                                className="border border-gray-300 bg-blue-100 p-6 rounded-lg shadow-lg flex-grow sm:flex-grow-0 sm:w-1/2 md:w-1/3 lg:w-1/4"
                            >
                                <h3 className="text-xl font-bold mb-2">{book.title}</h3>
                                <p className="text-gray-700 mb-2">Publié en : {book.yearPublished}</p>
                                <p className="text-gray-700 mb-2">Prix : {book.price} €</p>
                                {book.author ? (
                                    <div className="flex items-center">
                                        {book.author.photo ? (
                                            <img
                                                src={book.author.photo}
                                                alt={`${book.author.firstName} ${book.author.lastName}`}
                                                className="w-10 h-10 rounded-full mr-3"
                                            />
                                        ) : (
                                            <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 flex items-center justify-center text-white">
                                                ?
                                            </div>
                                        )}
                                        <div>
                                            <p className="text-gray-800">
                                                Auteur : {book.author.firstName} {book.author.lastName}
                                            </p>
                                        </div>
                                    </div>
                                ) : (
                                    <p className="text-gray-500">Auteur inconnu</p>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {/* Modal pour Filtrer les Livres */}
                {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/2 lg:w-1/3">
                            <h2 className="text-2xl font-bold mb-4">Filtrer les livres</h2>
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    name="author"
                                    value={filterCriteria.author}
                                    onChange={handleFilterChange}
                                    placeholder="Auteur"
                                    className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                                />
                                <input
                                    type="number"
                                    name="price"
                                    value={filterCriteria.price}
                                    onChange={handleFilterChange}
                                    placeholder="Prix maximum (€)"
                                    className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                                />
                                <input
                                    type="number"
                                    name="yearPublished"
                                    value={filterCriteria.yearPublished}
                                    onChange={handleFilterChange}
                                    placeholder="Année de publication"
                                    className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                                />
                            </div>
                            <div className="flex justify-end mt-6 space-x-4">
                                <Button
                                    onClick={handleResetFilters}
                                    className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
                                >
                                    Réinitialiser
                                </Button>
                                <Button
                                    onClick={handleApplyFilters}
                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                                >
                                    Filtrer
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </GlobalLayout>
    );
};

export default BooksPage;