export interface AuthorModel {
  id: string;
  firstName: string;
  lastName: string;
  photoUrl: string;
  bookCount: number;
};

export interface CreateAuthorModel  {
  firstName: string;
  lastName: string;
  photoUrl: string;
};

