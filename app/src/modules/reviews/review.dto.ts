import { IsNumber, IsString, IsUUID } from 'class-validator';

export class CreateReviewDto {
    @IsNumber()
    rating: number;
  
    @IsString()
    comment?: string;
  
    @IsUUID()
    bookId: string;
  }