import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/interfaces/quote.interface';
import { QuoteService } from '../../services/quote/quote.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
    standalone: false
})
export class FooterComponent implements OnInit {
  quote: Quote | null = null;

  constructor(private quoteService: QuoteService) { }

  ngOnInit(): void {
    this.quoteService.getTodayQuote().subscribe({
      next: (data: Quote[]) => {
        this.quote = data[0];
      },
      error: (error) => {
        console.error('Error fetching quote', error);
      }
    });
  }

}
