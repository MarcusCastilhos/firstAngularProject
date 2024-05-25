import { Component } from '@angular/core';
import { LivrosService } from './services/livros.service';
import { LivrosTabelaComponent } from './components/livros-tabela/livros-tabela.component';
import { TituloComponent } from './components/titulo/titulo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [LivrosTabelaComponent, TituloComponent],
  providers: [LivrosService]
})
export class AppComponent {
  
}