import { Component } from '@angular/core';
import { LivrosService } from './services/livros.service';
import { LivrosTabelaComponent } from './components/livros-tabela/livros-tabela.component';

interface Livro {
  id: number;
  title: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [LivrosTabelaComponent],
  providers: [LivrosService]
})
export class AppComponent {
  
}
