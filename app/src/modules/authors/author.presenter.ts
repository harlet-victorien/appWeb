import { AuthorModel } from './author.model';

export class AuthorPresenter {
  id: string;

  firstName: string;

  lastName: string;

  photoUrl: string;

  biography: string;

  numberBooks: number;

  private constructor(author: AuthorPresenter) {
    Object.assign(this, author);
  }

  public static from(author: AuthorModel) {
    return new AuthorPresenter({
      id: author.id,
      firstName: author.firstName,
      lastName: author.lastName,
      photoUrl: author.photoUrl,
      biography: author.biography,
      numberBooks: author.numberBooks,
    });
  }
}
