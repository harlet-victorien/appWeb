import { Book } from '../database/entities/book.entity';

export class BookPresenter {
  static toResponse(book: Book) {
    return {
      id: book.id,
      title: book.title,
      publicationDate: book.publicationDate,
      price: book.price,
      author: {
        id: book.author.id,
        name: `${book.author.firstName} ${book.author.lastName}`,
        photo: book.author.photo
      },
      averageRating: book.reviews?.length 
        ? book.reviews.reduce((acc, rev) => acc + rev.rating, 0) / book.reviews.length 
        : null
    };
  }
}