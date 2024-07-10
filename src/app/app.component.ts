import { Component } from '@angular/core';
import { LivrosService } from './services/livros.service';
import { LivrosTabelaComponent } from './components/livros-tabela/livros-tabela.component';
import { TituloComponent } from './components/titulo/titulo.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { AddBookFormComponent } from './components/add-book-form/add-book-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    LivrosTabelaComponent,
    TituloComponent,
    AddBookComponent,
    AddBookFormComponent,
  ],
  providers: [LivrosService],
})
export class AppComponent {}
