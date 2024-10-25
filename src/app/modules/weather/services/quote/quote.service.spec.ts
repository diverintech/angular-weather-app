import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { QuoteService } from './quote.service';
import { Quote } from 'src/app/interfaces/quote.interface';

describe('QuoteService', () => {
  let service: QuoteService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [QuoteService]
    });

    service = TestBed.inject(QuoteService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve today\'s quote from the API', () => {
    const mockQuote: Quote[] = [{
      q: "Sample quote", a: "Author",
      h: ''
    }];

    service.getTodayQuote().subscribe((quote) => {
      expect(quote).toEqual(mockQuote);
    });

    const req = httpMock.expectOne('https://zenquotes.io/api/today');
    expect(req.request.method).toBe('GET');
    req.flush(mockQuote);
  });
});
