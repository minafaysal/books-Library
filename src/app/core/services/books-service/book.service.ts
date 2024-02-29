import { Injectable } from '@angular/core';
import { BOOK } from '../../models/common.model';
import { Observable } from 'rxjs';
import { RESPONCE } from '../../models/response.model';
import { ApiService } from '../api-service/api.service';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private readonly apiService: ApiService) {}

   getAllBooks(): Observable<RESPONCE<BOOK[]>> {
    return this.apiService.get<RESPONCE<BOOK[]>>(
      '/subjects/finance.json?limit=9'
    );
}
}
