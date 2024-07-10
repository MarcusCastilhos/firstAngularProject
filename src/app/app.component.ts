import { Component } from '@angular/core';
import { BooksService } from './services/books.service';
import { BooksTableComponent } from './components/books-table/books-table.component';
import { TitleComponent } from './components/title/title.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { AddBookFormComponent } from './components/add-book-form/add-book-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    CommonModule,
    BooksTableComponent,
    TitleComponent,
    AddBookComponent,
    AddBookFormComponent,
  ],
  providers: [BooksService],
})
export class AppComponent {
  isAddingBook = false;

  onAddBook() {
    this.isAddingBook = true;
  }

  onBookAdded() {
    this.isAddingBook = false;
  }

  onCancelAddBook() {
    this.isAddingBook = false;
  }
}
