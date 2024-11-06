import { FC, useState } from "react"
import { CreateBookModel } from "../models/BookModel"

type Props = {
  onCreate: (book: CreateBookModel) => void
}

export const CreateBookForm: FC<Props> = ({ onCreate }) => {
  const [newBookName, setNewBookName] = useState<string>('')

  return (<div>
    <br/>
    <input value={newBookName} onChange={(e) => setNewBookName(e.target.value)} />
    <button onClick={() => onCreate({ title: newBookName, yearPublished: 2000, authorId: '9bef29d9-895b-4200-b70d-ea04be03c364' })}>Add</button>
    <br/>
  </div>)
}