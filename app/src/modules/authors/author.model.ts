export type AuthorModel = {
  id: string;
  firstName: string;
  lastName: string;
  photoUrl: string;
  biography: string;
  numberBooks: number;
};

export type CreateAuthorModel = {
  id: string;
  firstName: string;
  lastName: string;
  photoUrl: string;
  biography: string;
  numberBooks: number;
};

export type UpdateAuthorModel = {
  id: string;
  firstName?: string;
  lastName?: string;
  photoUrl?: string;
  biography?: string;
  numberBooks?: number;
};


