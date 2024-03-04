import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-whishlist-page',
  templateUrl: './whishlist-page.component.html',
  styleUrls: ['./whishlist-page.component.scss'],
})
export class WhishlistPageComponent implements OnInit {
  constructor(
    private readonly spinner: NgxSpinnerService,
  ) {
  }

  ngOnInit() {
    this.spinner.hide();
  }
}
