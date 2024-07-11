import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, switchMap } from 'rxjs';
import { environment } from '../../environments/environments';

interface Book {
  id: number;
  title: string;
  year: number;
  author: string;
}

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private apiUrl = `${environment.userApi}/books`;

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${id}`);
  }

  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  addBook(book: Book): Observable<Book> {
    return this.getBooks().pipe(
      map((books) => {
        const maxId =
          books.length > 0 ? Math.max(...books.map((b) => b.id)) : 0;
        book.id = maxId + 1;
        return book;
      }),
      switchMap((newBook) => this.http.post<Book>(this.apiUrl, newBook))
    );
  }
}
