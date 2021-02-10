import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../model/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  url = 'http://localhost:8080/cards';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) {
  }
  public getAll(): Observable<Card[]> {
    return this.httpClient.get<Card[]>(this.url);
  }

  public getByCardClass(idCardClass: string): Observable<Card[]> {
    return this.httpClient.get<Card[]>(`${this.url}/cardsClass/${idCardClass}`);
  }

  public getById(id: string): Observable<Card> {
    return this.httpClient.get<Card>(`${this.url}/${id}`);
  }

  public createNew(card: Card): Observable<Card> {
    return this.httpClient.post<Card>(this.url, card, this.httpOptions);
  }

  public update(id: string, card: Card): Observable<Card> {
    return this.httpClient.put<Card>(`${this.url}/${id}`, card, this.httpOptions);
  }

  public delete(id: string): Observable<any> {
    return this.httpClient.delete<any>(`${this.url}/${id}`);
  }

}
