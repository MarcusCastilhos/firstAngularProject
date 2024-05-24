import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Livro {
  id: number;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class LivrosService {
  private apiUrl = 'http://localhost:3000/livros';

  constructor(private http: HttpClient) {}

  getLivros(): Observable<Livro[]> {
    return this.http.get<Livro[]>(this.apiUrl);
  }
}