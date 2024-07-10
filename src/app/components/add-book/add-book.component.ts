import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.scss',
})
export class AddBookComponent {
  @Output() addBook = new EventEmitter<void>();

  onAddBook() {
    this.addBook.emit();
  }
}
