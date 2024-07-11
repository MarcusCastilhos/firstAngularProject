import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

interface Book {
  id: string;
  title: string;
  year: number;
  author: string;
}

@Component({
  selector: 'app-books-table',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './books-table.component.html',
  styleUrl: './books-table.component.scss',
})
export class BooksTableComponent implements OnInit {
  books: Book[] = [];

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks(): void {
    this.booksService.getBooks().subscribe({
      next: (data: Book[]) => {
        this.books = data;
      },
      error: (error) => {
        console.error('Erro ao buscar livros:', error);
        alert('Erro ao buscar livros. Tente novamente mais tarde.');
      },
    });
  }

  showBooks(id: number): void {
    this.booksService.getBookById(id).subscribe({
      next: (book: Book) => {
        alert(
          `Detalhes do Livro:\nID: ${book.id}\nTítulo: ${book.title}\nAno: ${book.year}\nAutor: ${book.author}`
        );
      },
      error: (error) => {
        console.error('Erro ao buscar detalhes do livro:', error);
        alert('Erro ao buscar detalhes do livro. Tente novamente mais tarde.');
      },
    });
  }

  editBook(id: number): void {
    this.booksService.getBookById(id).subscribe({
      next: (book: Book) => {
        console.log('Editando livro', book);
      },
      error: (error) => {
        console.error('Erro ao buscar livro para edição:', error);
        alert('Erro ao buscar livro para edição. Tente novamente mais tarde.');
      },
    });
  }

  deleteBook(id: number): void {
    const confirmDelete = confirm(
      'Você tem certeza que deseja deletar este livro?'
    );
    if (confirmDelete) {
      this.booksService.deleteBook(id).subscribe({
        next: () => {
          console.log('Livro deletado com sucesso');
          this.fetchBooks();
        },
        error: (error) => {
          console.error('Erro ao deletar livro:', error);
          alert('Erro ao deletar livro. Tente novamente mais tarde.');
        },
      });
    }
  }
}
