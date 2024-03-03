import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { takeUntil, BehaviorSubject, Observable } from 'rxjs';
import { ComponentBase } from 'src/app/core/base/common-base';
import { BOOK } from 'src/app/core/models/common.model';
import { BookService } from 'src/app/core/services/books-service/book.service';
import { SharedService } from 'src/app/core/services/shared-service/shared.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent extends ComponentBase implements OnInit {
  books: BOOK[] = [];
  booksWithCovers: BOOK[] = [];
  coverImg: string = '/assets/img/no_cover.gif';

  constructor(
    private readonly bookService: BookService,
    private readonly sharedService: SharedService,
    private readonly spinner: NgxSpinnerService
  ) {
    super();
  }

  ngOnInit() {
    this.spinner.show();
    this.getBooks();
  }
  getBooks() {
    this.bookService
      .getAllBooks()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.books = res['works'];
        this.booksWithCovers = this.books.map((singleBook) => {
          return {
            ...singleBook,
            id: singleBook.key.replace('/works/', ''),
            cover_img: singleBook.cover_id
              ? `https://covers.openlibrary.org/b/ID/${singleBook.cover_id}-L.jpg`
              : '/assets/img/no_cover.gif',
          };
        });
        this.sharedService.setBooks(this.booksWithCovers);
        // this.sharedService.checkStatusSuccessResponse(res.State);
        this.spinner.hide();
      });
  }
  trackByBookId(index: number, book: BOOK): string {
    return book.id;
  }
}
