import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {

  constructor(
    private readonly spinner: NgxSpinnerService
  ) {
  }
  ngOnInit() {
    this.spinner.hide();
  }
}
