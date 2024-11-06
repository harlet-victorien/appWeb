import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BookResponse } from '../../../models/types';
import { ReviewDrawer } from '../../../components/ReviewDrawer';
import { Modal } from '../../../components/Modal';
import { Link } from '../../../components/Link';
import { useRouter } from '../../../hooks/useRouter';
import { Button } from '../../../components/Button';

export default function BookDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [book, setBook] = useState<BookResponse>();
  const [isReviewDrawerOpen, setIsReviewDrawerOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    if (id) {
      fetchBook();
    }
  }, [id]);

  const fetchBook = async () => {
    try {
      const response = await axios.get<BookResponse>(`/api/books/${id}`);
      setBook(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/books/${id}`);
      router.push('/books');
    } catch (error) {
      console.error(error);
    }
  };

  if (!book) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{book.title}</h1>
      <div className="mb-4">
        <p>Price: ${book.price}</p>
        <p>Published: {new Date(book.publicationDate).toLocaleDateString()}</p>
        <Link href={`/authors/${book.author.id}`} className="text-blue-500">
          {book.author.name}
        </Link>
      </div>

      <div className="flex gap-4">
        <Button
          onClick={() => setIsReviewDrawerOpen(true)}
          className="bg-green-500"
        >
          Reviews
        </Button>
        <Button
          onClick={() => setIsDeleteModalOpen(true)}
          className="bg-red-500"
        >
          Delete
        </Button>
      </div>

      <ReviewDrawer
        isOpen={isReviewDrawerOpen}
        onClose={() => setIsReviewDrawerOpen(false)}
        bookId={id ?? ''}
      />

      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
      >
        <h2 className="text-xl mb-4">Delete Book</h2>
        <p>Are you sure you want to delete this book?</p>
        <div className="flex gap-4 mt-4">
          <Button onClick={handleDelete} className="bg-red-500">
            Delete
          </Button>
          <Button onClick={() => setIsDeleteModalOpen(false)} className="bg-gray-200">
            Cancel
          </Button>
        </div>
      </Modal>
    </div>
  );
}