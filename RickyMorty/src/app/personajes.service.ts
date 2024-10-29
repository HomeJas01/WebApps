import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  baseUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = 'https://rickandmortyapi.com/api/character';
   }

  //  getAll(): Observable<any>{
  //   return this.http.get<any>(this.baseUrl);
  //  }

   getAll(pPage = 1):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/?page=${pPage}`);

   }
}
