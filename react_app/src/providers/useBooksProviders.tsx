import { useState, useEffect } from 'react';
import axios from "axios";
import { BookModel, CreateBookModel } from "../models/BookModel"

export const useListBookProvider = () => {
  const [bookList, setBooks] = useState<BookModel[]>([]);

  const [book, setBook] = useState<BookModel | null>(null);

  const [message, setMessage] = useState<string | null>(null); // Add message state


  const loadBooks = () => {
    axios.get<BookModel[]>('http://localhost:3001/books').then((response) => {
      setBooks(response.data)
    }).catch((error) => {
      console.error(error)
    })
  }

  const loadBooksid = (id: string) => {
    axios.get<BookModel>(`http://localhost:3001/books/${id}`).then((response) => {
      setBook(response.data)
    }).catch((error) => {
      console.error(error)
    })
  }

  const onDelete = (id: string) => {
    axios.delete(`http://localhost:3001/books/${id}`).then(() => {
      setBooks((prev) => prev.filter(book => book.id !== id))
    }).catch((error) => {
      console.error(error)
    })
  }

  const onUpdate = (id: string, title: string, price: number) => {
    axios.patch(`http://localhost:3001/books/${id}`, { title, price }).then(() => {
      setBooks((prev) => prev.map(book => book.id === id ? { ...book, title, price } : book))
    }).catch((error) => {
      console.error(error)
    })
  }

  const onCreate = async (input: CreateBookModel) => {
    try {
      await axios.post('http://localhost:3001/books', { book: input });
      loadBooks();
      setMessage('Book created successfully!'); // Set success message
    } catch (error) {
      console.error(error);
      setMessage('Failed to create book.'); // Set error message
    }
  }

  return {
    bookList,
    book,
    onDelete,
    onUpdate,
    onCreate,
    loadBooks,

    loadBooksid,

    message, // Return message state

  };
};