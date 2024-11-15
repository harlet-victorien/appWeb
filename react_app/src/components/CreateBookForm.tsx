import { FC, useState } from "react"
import { CreateBookModel } from "../models/BookModel"

type Props = {
  onCreate: (book: CreateBookModel) => void
}

export const CreateBookForm: FC<Props> = ({ onCreate }) => {
  const [newBookName, setNewBookName] = useState<string>('')
  const [newBookPrice, setNewBookPrice] = useState<number>(0) // Add this line

  return (
    <div>
      <br/>
      <input value={newBookName} onChange={(e) => setNewBookName(e.target.value)} placeholder="Book Title" />
      <input value={newBookPrice} onChange={(e) => setNewBookPrice(Number(e.target.value))} placeholder="Book Price" type="number" /> {/* Add this line */}
      <button onClick={() => onCreate({ title: newBookName, yearPublished: 2000, price: newBookPrice, authorId: '9bef29d9-895b-4200-b70d-ea04be03c364' })}>Add</button>
      <br/>
    </div>
  )
}