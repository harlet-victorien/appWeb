export type AuthorModel = {
  id: string;
  firstName: string;
  lastName: string;
  photoUrl: string;
};

export type CreateAuthorModel = {
  id: string;
  firstName: string;
  lastName: string;
  photoUrl: string;
};

export type UpdateAuthorModel = {
  id: string;
  firstName?: string;
  lastName?: string;
  photoUrl?: string;
};


