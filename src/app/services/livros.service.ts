import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';

interface Livro {
  id: number;
  title: string;
  year: number;
}

@Injectable({
  providedIn: 'root',
})
export class LivrosService {
  private apiUrl = `${environment.userApi}/livros`;

  constructor(private http: HttpClient) {}

  getLivros(): Observable<Livro[]> {
    return this.http.get<Livro[]>(this.apiUrl);
  }
}
