import { Injectable } from '@angular/core';
import { BOOK } from '../../models/common.model';
import { Observable } from 'rxjs';
import { RESPONCE } from '../../models/response.model';
import { ApiService } from '../api-service/api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(
    private readonly apiService: ApiService,
  ) {}

  getAllBooks(): Observable<RESPONCE<BOOK[]>> {
    return this.apiService.get<RESPONCE<BOOK[]>>(
      '/subjects/finance.json?limit=9'
    );
  }

  getAuthorDetails(authorName: string): Observable<any> {
    const encodedAuthorName = encodeURIComponent(authorName);
     return this.apiService.get<RESPONCE<any[]>>(
       `/search/authors.json?q=${encodedAuthorName}`
     );
  }
}
 
