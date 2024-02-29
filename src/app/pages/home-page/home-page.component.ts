import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
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

  constructor(
    private readonly bookService: BookService,
    private readonly sharedService: SharedService
  ) {
    super();
  }

  ngOnInit() {
    this.getBooks();
  }
  getBooks() {
    this.bookService
      .getAllBooks()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.books = res['works'];
        // this.sharedService.checkStatusSuccessResponse(res.State);
      });
  }
}
