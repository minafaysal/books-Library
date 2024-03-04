import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BOOK } from 'src/app/core/models/common.model';
import { SharedService } from 'src/app/core/services/shared-service/shared.service';

@Component({
  selector: 'app-whishlist-page',
  templateUrl: './whishlist-page.component.html',
  styleUrls: ['./whishlist-page.component.scss'],
})
export class WhishlistPageComponent implements OnInit {
  booksWithCovers: BOOK[] = [];
  constructor(
    private readonly spinner: NgxSpinnerService,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.spinner.hide();
    this.sharedService.wishlist$.subscribe((wishlist) => {
      this.booksWithCovers = wishlist.filter((book) => book.isAddedToWishlist);
    });
  }
  removeFromWishlist(bookId: string): void {
    this.sharedService.removeFromWishlist(bookId);
    this.booksWithCovers = this.booksWithCovers.filter(
      (item) => item.id !== bookId
    );
  }

  trackByBookId(index: number, book: BOOK): string {
    return book.id;
  }
}
