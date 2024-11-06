import { AuthorPresenter } from '../authors/author.presenter';
import { BookModel } from './book.model';

export class BookPresenter {
  id: string;

  title: string;

  author: AuthorPresenter;

  private constructor(data: BookPresenter) {
    Object.assign(this, data);
  }

  public static from(data: BookModel) {
    return new BookPresenter({
      id: data.id,
      title: data.title,
      author: AuthorPresenter.from(data.author),
    });
  }
}
