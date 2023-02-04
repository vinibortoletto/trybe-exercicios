import connection from './connection';
import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';

export interface Book {
  id?: number;
  title: string;
  price: number;
  author: string;
  isbn: string;
}

export default class BookModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async getAll(): Promise<Book[]> {
    const result = await this.connection.execute<(Book & RowDataPacket)[]>(
      'SELECT * FROM books'
    );
    const [rows] = result;
    return rows;
  }

  public async create(book: Book): Promise<Book> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO books (title, price, author, isbn) VALUES (?,?,?,?)',
      [...Object.keys(book)]
    );

    return { id: insertId, ...book };
  }
}
