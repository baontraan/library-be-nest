import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity.js';
import { Book } from '../../books/entities/book.entity.js';

@Entity('borrow_books')
export class BorrowBook {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'borrow_date', nullable: false })
  borrowDate: Date;

  @Column({ name: 'expect_return_date', nullable: false })
  expectReturnDate: Date;

  @Column({ name: 'penalty_money', nullable: false })
  penaltyMoney: number;

  @Column({ type: 'varchar' })
  status: string;

  @Column({ name: 'return_date', nullable: false })
  returnDate: Date;

  @ManyToOne(() => User, (user: User) => user.borrowBooks)
  @JoinColumn({ name: 'user_id' })
  //   user: User;
  user: any;

  @ManyToOne(() => Book, (book: Book) => book.borrowBooks)
  @JoinColumn({ name: 'book_id' })
  book: Book;
}
