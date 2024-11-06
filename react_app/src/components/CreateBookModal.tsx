import React, { FC, useState, FormEvent } from 'react';
import { Modal } from './Modal';
import { Button } from './Button';
import { CreateBookInput } from '../models/types';
import axios from 'axios';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
};

export const CreateBookModal: FC<Props> = ({ isOpen, onClose, onSuccess }) => {
  const [title, setTitle] = useState('');
  const [publicationDate, setPublicationDate] = useState('');
  const [price, setPrice] = useState<number>(0);
  const [authorId, setAuthorId] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const input: CreateBookInput = {
      title,
      publicationDate: new Date(publicationDate),
      price,
      authorId,
    };
    // Assuming you have a provider or context to handle creation
    // Replace with appropriate logic
    await axios.post('/api/books', input);
    onSuccess();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-xl mb-4">Add New Book</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="border p-2 rounded"
        />
        <input
          type="date"
          placeholder="Publication Date"
          value={publicationDate}
          onChange={(e) => setPublicationDate(e.target.value)}
          required
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          required
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Author ID"
          value={authorId}
          onChange={(e) => setAuthorId(e.target.value)}
          required
          className="border p-2 rounded"
        />
        <div className="flex justify-end gap-4">
          <Button type="submit">Add Book</Button>
          <Button type="button" onClick={onClose} className="bg-gray-500">
            Cancel
          </Button>
        </div>
      </form>
    </Modal>
  );
};