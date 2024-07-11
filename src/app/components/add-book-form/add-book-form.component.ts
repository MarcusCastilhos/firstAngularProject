import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-add-book-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-book-form.component.html',
  styleUrl: './add-book-form.component.scss',
})
export class AddBookFormComponent {
  @Output() bookAdded = new EventEmitter<void>();
  @Output() cancelAddBook = new EventEmitter<void>();
  bookForm: FormGroup;

  constructor(private fb: FormBuilder, private booksService: BooksService) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      year: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]],
      author: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.bookForm.valid) {
      const newBook = {
        ...this.bookForm.value,
        year: Number(this.bookForm.value.year),
      };
      this.booksService.addBook(newBook).subscribe({
        next: () => {
          console.log('Livro adicionado com sucesso');
          this.bookAdded.emit();
        },
      });
    } else {
      console.log('Formulário inválido');
    }
  }

  onCancel() {
    this.cancelAddBook.emit();
  }
}
