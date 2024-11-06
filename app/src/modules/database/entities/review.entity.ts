import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Book } from './book.entity';

@Entity()
export class Review {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  rating: number;

  @Column({ nullable: true })
  comment: string;

  @Column()
  createdAt: Date;

  @ManyToOne(() => Book, (book) => book.reviews)
  book: Book;
}