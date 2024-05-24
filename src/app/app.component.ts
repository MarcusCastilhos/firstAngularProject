import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LivrosService } from './services/livros.service';

interface Livro {
  id: number;
  title: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, HttpClientModule],
  providers: [LivrosService]
})
export class AppComponent {
  livros: Livro[] = [];

  constructor(private livrosService: LivrosService) {}

  ngOnInit(): void {
    this.livrosService.getLivros().subscribe((data: Livro[]) => {
      this.livros = data;
      console.log(this.livros)
    });
  }
}
