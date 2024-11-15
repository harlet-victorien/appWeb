import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity('authors')
export class AuthorEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'first_name', type: 'varchar' })
  firstName: string;

  @Column({ name: 'last_name', type: 'varchar' })
  lastName: string;

  @Column({ name: 'photo_url', type: 'varchar', nullable: true })
  photoUrl: string;

  @Column({ name: 'biography', type: 'text', nullable: true, default: '' })
  biography: string;

  @Column({ name: 'number_books', type: 'int', nullable: true, default: 0 })
  numberBooks: number;
}