import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from '../../categories/entities/category.entity.js';
import { BorrowBook } from '../../borrow-book/entities/borrow-book.entity.js';

@Entity('books')
export class Book {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column()
  author: string;

  @Column()
  price: number;

  @ManyToOne(() => Category, (category: Category) => category.books, {
    onDelete: 'SET NULL',
    nullable: true,
  })
  //   category: Category;
  category: any;

  @OneToMany(() => BorrowBook, (borrowBook: BorrowBook) => borrowBook.book)
  borrowBooks: BorrowBook[];

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
