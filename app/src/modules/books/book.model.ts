export type BookModel = {
  id: string;
  title: string;
  yearPublished: number;
  author: {
    id: string;
    firstName: string;
    lastName: string;
  };
};

export type CreateBookAuthorModel = {
  firstName: string;
  lastName: string;
};

export type CreateBookModel = {
  title: string;
  yearPublished: number;
  authorId: string;
};

export type UpdateBookModel = Partial<CreateBookModel>;
