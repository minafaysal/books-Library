import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { BOOK } from 'src/app/core/models/common.model';
import { BookService } from 'src/app/core/services/books-service/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  bookDetails: any=[];
  isAddedToWishlist: boolean = false;

  constructor(
    private readonly spinner: NgxSpinnerService,
  ) {}

  ngOnInit(): void {
    this.spinner.hide();
    // console.log(' this.bookDetails ', this.bookDetails);
  }
  toggleWishlist() {
    this.isAddedToWishlist = !this.isAddedToWishlist;
  }
}
