import { Author } from '../database/entities/author.entity';
import { AuthorModel } from './author.model';

export class AuthorPresenter {
  static toResponse(author: Author): AuthorModel {
    return {
      id: author.id,
      firstName: author.firstName,
      lastName: author.lastName,
      photo: author.photo,
      biography: author.biography,
      bookCount: author.books?.length || 0,
      averageRating: author.books?.length
        ? author.books.reduce((acc, book) => {
            const bookRating = book.reviews?.length
              ? book.reviews.reduce((sum, rev) => sum + rev.rating, 0) / book.reviews.length
              : 0;
            return acc + bookRating;
          }, 0) / author.books.length
        : null,
    };
  }
}