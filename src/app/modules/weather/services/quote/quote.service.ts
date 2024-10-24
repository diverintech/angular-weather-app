import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from 'src/app/interfaces/quote.interface';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  private apiUrl = 'https://zenquotes.io/api/today';

  constructor(private http: HttpClient) { }

  getTodayQuote(): Observable<Quote[]> {
    return this.http.get<Quote[]>(this.apiUrl);
  }

}
