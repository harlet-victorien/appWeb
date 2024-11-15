export interface BookModel {
  id: string;
  title: string;
  yearPublished: number;
  price: number;
}

export interface CreateBookModel {
  title: string;
  yearPublished: number;
  price: number;
  authorId: string;
}