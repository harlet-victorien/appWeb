import { IsString, IsNumber, IsDate, IsUUID } from 'class-validator';

export class CreateBookDto {
  @IsString()
  title: string;

  @IsDate()
  publicationDate: Date;

  @IsNumber()
  price: number;

  @IsUUID()
  authorId: string;
}

export class UpdateBookDto {
  @IsString()
  title?: string;

  @IsDate()
  publicationDate?: Date;

  @IsNumber()
  price?: number;
}

export class GetBooksDto {
  @IsString()
  search?: string;

  @IsString()
  sortBy?: 'title' | 'publicationDate' | 'price';
}