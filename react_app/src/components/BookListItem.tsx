import { FC, useState } from "react"
import { BookModel } from "../models/BookModel"

type Props = {
  book: BookModel
  onDelete: (id: string) => void
  onUpdate: (id: string, title: string, price: number) => void // Add price parameter
}

export const BookListItem: FC<Props> = ({ book, onDelete, onUpdate }) => {
  const [editMode, setEditMode] = useState<boolean>(false)
  const [newTitle, setNewTitle] = useState<string>(book.title)
  const [newPrice, setNewPrice] = useState<number>(book.price) // Add this line

  return (
    <div>
      - {editMode ? (
        <div>
          <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
          <input value={newPrice} onChange={(e) => setNewPrice(Number(e.target.value))} type="number" /> {/* Add this line */}
          <button onClick={() => {setEditMode(false); setNewTitle(book.title); setNewPrice(book.price)}}>Cancel</button>
          <button onClick={() => {onUpdate(book.id, newTitle, newPrice); setEditMode(false)}}>Ok</button> {/* Include price in update */}
        </div>
      ) : (
        <>
          {book.title} - ${book.price} {/* Display price */}
        </>
      )}
      <button onClick={() => onDelete(book.id)}>Delete</button>
      <br/>
    </div>
  )
}