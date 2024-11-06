'use client'
import axios from "axios"
import { useEffect, useState } from "react"
import { BookListItem } from "../../components/BookListItem"
import { GlobalLayout } from "../GlobalLayout"
import { CreateBookForm } from "../../components/CreateBookForm"
import { useListBookProvider } from "../../providers/useBooksProviders"

const BooksPage = () => {
  
  const { loadBooks, onCreate, onUpdate, onDelete, bookList} = useListBookProvider()
  
  useEffect(() => {
    loadBooks()
    }, [])

  return (
    <GlobalLayout>
      <>
        Books page
        <CreateBookForm onCreate={onCreate} />
        {bookList.map((book) => <BookListItem book={book} onDelete={onDelete} onUpdate={onUpdate} />)}
      </>
    </GlobalLayout>)
}

export default BooksPage