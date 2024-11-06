export type BookModel = {
  id: string
  title: string
}

export type CreateBookModel = {
  title: string
  yearPublished: number
  authorId: string
}