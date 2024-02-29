import { Component, OnInit } from '@angular/core';
import { BOOK } from 'src/app/core/models/common.model';

import { BookService } from 'src/app/core/services/book.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  Books: BOOK[] = [];

  constructor(private readonly bookService: BookService) {}

  ngOnInit() {
    this.getBooks();
  }
  getBooks() {}
}
