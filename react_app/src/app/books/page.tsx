import Link from 'next/link';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BookResponse } from '../../models/types';
import { BookCard } from '../../components/BookCard';
import { CreateBookModal } from '../../components/CreateBookModal';
import { Button } from '../../components/Button';

export default function BooksPage() {
  const [books, setBooks] = useState<BookResponse[]>([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<'title' | 'publicationDate' | 'price'>('title');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  useEffect(() => {
    fetchBooks();
  }, [search, sort]);

  const fetchBooks = async () => {
    const response = await axios.get<BookResponse[]>('/api/books', {
      params: { search, sortBy: sort }
    });
    setBooks(response.data);
  };

  const handleCreateSuccess = () => {
    fetchBooks();
  };

  return (
    <div className="p-4">
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search books..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded"
        />
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as typeof sort)}
          className="border p-2 rounded"
        >
          <option value="title">Title</option>
          <option value="publicationDate">Date</option>
          <option value="price">Price</option>
        </select>
        <Button
          onClick={() => setIsCreateModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Book
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map(book => (
          <BookCard key={book.id} book={book} onUpdate={fetchBooks} />
        ))}
      </div>

      <CreateBookModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSuccess={handleCreateSuccess}
      />
    </div>
  );
}