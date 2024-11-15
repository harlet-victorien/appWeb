import React, { useState } from 'react';
import { CreateBookModel } from '../models/BookModel';

interface CreateBookModalProps {
  open: boolean;
  onClose: () => void;
  onCreate: (book: Omit<BookModel, 'id'>) => void;
}

const CreateBookModal: React.FC<CreateBookModalProps> = ({ open, onClose, onCreate }) => {
  const [bookData, setBookData] = useState<Omit<BookModel, 'id'>>({
    title: '',
    yearPublished: new Date().getFullYear(),
    price: 0,
    authorId: '', // Initialize authorId
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setBookData((prev) => ({
      ...prev,
      [name]: name === 'yearPublished' || name === 'price' ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = () => {
    if (onCreate) {
      onCreate(bookData);
    }
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-black"> {/* Add text-black class */}
        <h1 className="text-2xl font-bold mb-4">Create New Book</h1>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={bookData.title}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="yearPublished">
              Year Published
            </label>
            <input
              type="number"
              id="yearPublished"
              name="yearPublished"
              value={bookData.yearPublished}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="price">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={bookData.price}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="authorId">
              Author ID
            </label>
            <input
              type="text"
              id="authorId"
              name="authorId"
              value={bookData.authorId}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded-lg mr-2"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBookModal;