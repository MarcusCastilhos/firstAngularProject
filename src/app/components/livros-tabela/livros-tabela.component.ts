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
    this.fetchLivros();
  }

  fetchLivros(): void {
    this.livrosService.getLivros().subscribe({
      next: (data: Livro[]) => {
        this.livros = data;
      },
      error: (error) => {
        console.error('Erro ao buscar livros:', error);
        alert('Erro ao buscar livros. Tente novamente mais tarde.');
      },
    });
  }

  mostrarLivro(id: number): void {
    this.livrosService.getLivroById(id).subscribe({
      next: (livro: Livro) => {
        alert(
          `Detalhes do Livro:\nID: ${livro.id}\nTítulo: ${livro.title}\nAno: ${livro.year}`
        );
      },
      error: (error) => {
        console.error('Erro ao buscar detalhes do livro:', error);
        alert('Erro ao buscar detalhes do livro. Tente novamente mais tarde.');
      },
    });
  }

  editarLivro(id: number): void {
    this.livrosService.getLivroById(id).subscribe({
      next: (livro: Livro) => {
        console.log('Editando livro', livro);
      },
      error: (error) => {
        console.error('Erro ao buscar livro para edição:', error);
        alert('Erro ao buscar livro para edição. Tente novamente mais tarde.');
      },
    });
  }

  deletarLivro(id: number): void {
    this.livrosService.deleteLivro(id).subscribe({
      next: () => {
        console.log('Livro deletado com sucesso');
        this.fetchLivros();
      },
      error: (error) => {
        console.error('Erro ao deletar livro:', error);
        alert('Erro ao deletar livro. Tente novamente mais tarde.');
      },
    });
  }
}
