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
  styleUrl: './livros-tabela.component.scss'
})
export class LivrosTabelaComponent implements OnInit{
  livros: Livro[] = [];

  constructor(private livrosService: LivrosService){}

  ngOnInit(): void {
    this.livrosService.getLivros().subscribe((data: Livro[]) => {
      this.livros = data;
      console.log(this.livros);
    })
  }
}
