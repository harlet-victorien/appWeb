"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { GlobalLayout } from '../GlobalLayout.tsx';
import { useListAuthorProvider } from '../../providers/useAuthorsProvider';
import { Button } from '../../components/Button';
import { useRouter } from 'next/navigation'; // Import useRouter
import CreateAuthorModal from '../../components/CreateAuthorModal';


const AuthorsPage = () => {
    const { authorList, loadAuthors } = useListAuthorProvider();
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [filterCriteria, setFilterCriteria] = useState({
        name: '',
        bookCount: '',
    });

    const router = useRouter(); // Initialize router




    useEffect(() => {
        loadAuthors();
    }, []);


    // Utilisation de useMemo pour optimiser le filtrage
    const filteredAuthorList = useMemo(() => {
        return authorList.filter((author) => {
            const matchesName = `${author.firstName} ${author.lastName}`.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesBookCount =
                filterCriteria.bookCount === '' ||
                author.bookCount === parseInt(filterCriteria.bookCount);
            return matchesName && matchesBookCount;
        });
    }, [authorList, searchTerm, filterCriteria]);


    const handleCreateAuthor = (author) => {
        loadAuthors();
    };


    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilterCriteria((prev) => ({ ...prev, [name]: value }));
    };

    const handleApplyFilters = () => {
        setIsModalOpen(false);
    };

    const handleResetFilters = () => {
        setFilterCriteria({
            name: '',
            bookCount: '',
        });
    };

    const handleDetail = (id) => {
        router.push(`/authors/${id}`);
    };

    return (
        <GlobalLayout title="Page des Auteurs">
            <main className="flex flex-col items-start justify-start min-h-screen py-4 px-6">
                <h1 className="text-4xl font-bold mb-6">Bienvenue sur la Page des Auteurs</h1>
                <button
                    onClick={() => setIsCreateOpen(true)}
                    className="mb-4 px-4 py-2 bg-green-500 text-white rounded-lg"
                >
                    Add Author
                </button>
                <CreateAuthorModal
                    open={isCreateOpen}
                    onClose={() => setIsCreateOpen(false)}
                    onCreate={handleCreateAuthor}
                />
                {/* Barre de Recherche et Bouton Filtrer */}
                <div className="w-full mb-8 flex items-center space-x-4">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Rechercher un auteur"
                        className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-500"
                    />
                    <Button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                        aria-label="Filtrer les auteurs"
                    >
                        +
                    </Button>
                </div>

                {/* Liste des Auteurs Filtrée */}
                {filteredAuthorList.length === 0 ? (
                    <p className="text-gray-500">Aucun auteur trouvé.</p>
                ) : (
                    <div className="flex flex-wrap gap-6 w-full">
                        {filteredAuthorList.map((author) => (
                            <div
                                key={author.id}
                                className="flex flex-col bg-white p-4 rounded-lg shadow"
                            >
                                <div className="border border-gray-300 text-black bg-gray-100 p-6 rounded-lg shadow-lg flex-grow sm:flex-grow-0 sm:w-auto">
                                    <h3 className="text-xl font-bold mb-2">{author.firstName} {author.lastName}</h3>
                                    <img src={author.photoUrl} alt={`${author.firstName} ${author.lastName}`} className="h-32 mb-2" />
                                    <p className="text-gray-700 mb-2">Nombre de livres écrits : {author.numberBooks}</p>
                                </div>
                                <button
                                    onClick={() => handleDetail(author.id)}
                                    className="mt-4 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 self-end"
                                >
                                    Detail
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {/* Modal pour Filtrer les Auteurs */}
                {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/2 lg:w-1/3">
                            <h2 className="text-2xl font-bold mb-4">Filtrer les auteurs</h2>
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    name="name"
                                    value={filterCriteria.name}
                                    onChange={handleFilterChange}
                                    placeholder="Nom"
                                    className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                                />
                                <input
                                    type="number"
                                    name="bookCount"
                                    value={filterCriteria.bookCount}
                                    onChange={handleFilterChange}
                                    placeholder="Nombre de livres écrits"
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

export default AuthorsPage;