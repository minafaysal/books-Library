import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { BOOK } from 'src/app/core/models/common.model';
import { SharedService } from 'src/app/core/services/shared-service/shared.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit, OnDestroy {
  book: BOOK | undefined;
  isAddedToWishlist: boolean = false;
  private subscription!: Subscription;

  constructor(
    private readonly spinner: NgxSpinnerService,
    private sharedService: SharedService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.spinner.show();
    this.subscription = this.sharedService.books$.subscribe((books) => {
      const bookId = this.activatedRoute.snapshot.paramMap.get('id');
      this.book = books.find((book) => book.id === bookId);
      if (!this.book) {
        const storedBook = localStorage.getItem('bookDetails');
        if (storedBook) {
          this.book = JSON.parse(storedBook);
        }
      } else {
        localStorage.setItem('bookDetails', JSON.stringify(this.book));
      }
      this.spinner.hide();
    }, error => {
      this.sharedService.handleApiError(error); 
      this.spinner.hide();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  toggleWishlist() {
    this.isAddedToWishlist = !this.isAddedToWishlist;
  }
}
