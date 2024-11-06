import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Author } from './author.entity';
import { Review } from './review.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  publicationDate: Date;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @ManyToOne(() => Author, author => author.books)
  author: Author;

  @OneToMany(() => Review, review => review.book)
  reviews: Review[];
}