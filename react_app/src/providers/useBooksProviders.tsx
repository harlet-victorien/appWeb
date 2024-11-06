import { useState } from 'react';
import axios from 'axios';
import { BookResponse, CreateBookInput } from '../models/types';

export const useBooksProvider = () => {
  const [bookList, setBookList] = useState<BookResponse[]>([]);

  const loadBooks = async () => {
    try {
      const response = await axios.get<BookResponse[]>('/api/books');
      setBookList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const onDelete = async (id: string) => {
    try {
      await axios.delete(`/api/books/${id}`);
      loadBooks();
    } catch (error) {
      console.error(error);
    }
  };

  const onUpdate = async (id: string, data: Partial<BookResponse>) => {
    try {
      await axios.put(`/api/books/${id}`, data);
      loadBooks();
    } catch (error) {
      console.error(error);
    }
  };

  const onCreate = async (input: CreateBookInput) => {
    try {
      await axios.post('/api/books', input);
      loadBooks();
    } catch (error) {
      console.error(error);
    }
  };

  return {
    bookList,
    onDelete,
    onUpdate,
    onCreate,
    loadBooks,
  };
};