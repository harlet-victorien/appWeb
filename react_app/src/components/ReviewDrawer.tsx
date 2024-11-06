import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { BookResponse } from '../models/types';
import { Button } from './Button';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  bookId: string;
};

export const ReviewDrawer: FC<Props> = ({ isOpen, onClose, bookId }) => {
  const [reviews, setReviews] = useState<any[]>([]);

  useEffect(() => {
    if (isOpen) {
      fetchReviews();
    }
  }, [isOpen]);

  const fetchReviews = async () => {
    const response = await axios.get(`/api/books/${bookId}/reviews`);
    setReviews(response.data);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end">
      <div className="bg-white w-1/3 p-4">
        <h2 className="text-xl mb-4">Reviews</h2>
        {reviews.length === 0 ? (
          <p>No reviews available.</p>
        ) : (
          reviews.map((review) => (
            <div key={review.id} className="mb-2">
              <p><strong>{review.author}</strong></p>
              <p>{review.content}</p>
            </div>
          ))
        )}
        <Button onClick={onClose} className="mt-4">Close</Button>
      </div>
    </div>
  );
};