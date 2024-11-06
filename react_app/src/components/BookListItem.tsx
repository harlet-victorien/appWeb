import { FC, useState } from "react"
import { BookModel } from "../models/BookModel"

type Props = {
  book: BookModel
  onDelete: (id: string) => void
  onUpdate: (id: string, title: string) => void
}

export const BookListItem: FC<Props> = ({ book, onDelete, onUpdate }) => {
  const [editMode, setEditMode] = useState<boolean>(false)
  const [newTitle, setNewTitle] = useState<string>(book.title)


  return <div>
    - {editMode ? (
        <div>
          <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
          <button onClick={() => {setEditMode(false); setNewTitle(book.title)} }>Cancel</button>
          <button onClick={() => {onUpdate(book.id, newTitle); setEditMode(false)}}>Ok</button>
        </div>) : book.title}
        <button onClick={() => onDelete(book.id)}>Delete</button>
    <br/>
  </div>
}