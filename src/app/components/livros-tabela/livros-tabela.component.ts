import { Component, OnInit } from '@angular/core';
import { LivrosService } from '../../services/livros.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

interface Livro {
  id: number;
  title: string;
  year: number;
}

@Component({
  selector: 'app-livros-tabela',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './livros-tabela.component.html',
  styleUrl: './livros-tabela.component.scss',
})
export class LivrosTabelaComponent implements OnInit {
  livros: Livro[] = [];

  constructor(private livrosService: LivrosService) {}

  ngOnInit(): void {
    this.livrosService.getLivros().subscribe((data: Livro[]) => {
      this.livros = data;
      console.log(this.livros);
    });
  }

  mostrarLivro(livro: Livro): void {
    alert(
      `Detalhes do Livro:\nID: ${livro.id}\nTítulo: ${livro.title}\nAno: ${livro.year}`
    );
  }

  editarLivro(livro: Livro): void {
    console.log('Editando livro', livro);
  }

  deletarLivro(id: number): void {
    this.livrosService.deleteLivro(id).subscribe(() => {
      this.livros = this.livros.filter((l) => l.id !== id);
      console.log('Livro deletado com sucesso');
    });
  }
}
