import { FC } from "react";
import { BookResponse } from "../models/types";
import { Link } from "./Link";

export const BookCard: FC<{
    book: BookResponse;
    onUpdate: () => void;
  }> = ({ book, onUpdate }) => {
    return (
      <div className="border p-4 rounded-lg">
        <h3 className="text-xl font-bold">{book.title}</h3>
        <p>Price: ${book.price}</p>
        <p>Published: {new Date(book.publicationDate).toLocaleDateString()}</p>
        <Link href={`/books/${book.id}`} className="text-blue-500">
          View Details
        </Link>
      </div>
    );
  };