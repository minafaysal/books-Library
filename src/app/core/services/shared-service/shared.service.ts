import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { BOOK } from '../../models/common.model';


@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private booksSource = new BehaviorSubject<BOOK[]>([]);
  books$ = this.booksSource.asObservable();

  constructor(
    private readonly toastr: ToastrService,
  ) {}

  setBooks(books: BOOK[]) {
    this.booksSource.next(books);
  }

  getBookById(id: string): BOOK | undefined {
    return this.booksSource.value.find((book) => book.id === id);
  }

  handleApiError(
    error: any,
    defaultMessage: string = 'An error occurred. Please try again later.'
  ) {
    let errorMessage = defaultMessage;
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      if (error.status === 0) {
        errorMessage =
          'Could not connect to server. Please check your internet connection.';
      } else {
        errorMessage = error.message || defaultMessage;
      }
    }

    this.toastr.error(errorMessage, 'Error');
  }
}
