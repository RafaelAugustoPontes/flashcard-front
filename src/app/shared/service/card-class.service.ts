import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CardClass } from '../model/card-class';

@Injectable({
  providedIn: 'root'
})
export class CardClassClassService {

  url = 'http://localhost:8080/cardClasses';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) {
  }

  public getById(id: String): Observable<CardClass> {
    return this.httpClient.get<CardClass>(`${this.url}/${id}/`);
  }

  public getAll(): Observable<CardClass[]> {
    return this.httpClient.get<CardClass[]>(this.url);
  }

  public createNew(cardClass: CardClass): Observable<CardClass> {
    return this.httpClient.post<CardClass>(this.url, cardClass, this.httpOptions);
  }

  public update(id: string, cardClass: CardClass): Observable<CardClass> {
    return this.httpClient.put<CardClass>(`${this.url}/id`, cardClass, this.httpOptions);
  }

  public delete(id: String): Observable<any> {
    return this.httpClient.delete<any>(`${this.url}/${id}`);
  }


}
