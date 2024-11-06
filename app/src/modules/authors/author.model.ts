export type AuthorModel = {
  id: string;
  firstName: string;
  lastName: string;
  photo: string;
  biography: string;
  bookCount: number;
  averageRating: number | null;
};

export type CreateAuthorModel = {
  firstName: string;
  lastName: string;
  photo: string;
  biography: string;
};