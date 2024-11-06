export interface BookResponse {
    id: string;
    title: string;
    publicationDate: string;
    price: number;
    author: {
      id: string;
      name: string;
    };
    averageRating: number;
  }
  
  export interface CreateBookInput {
    title: string;
    publicationDate: Date;
    price: number;
    authorId: string;
  }