import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { BookService } from '../services/books-service/book.service';

@Injectable({
  providedIn: 'root',
})
export class BookDetailsResolver implements Resolve<any> {
  constructor(private bookService: BookService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    // const workId = route.paramMap.get('key').replace('/works/', '');
    // return this.bookService.getBookDetails('OL565230W');
    return this.bookService.getBookDetails();
  }
}
