import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(
    private readonly toastr: ToastrService,
    private readonly spineer: NgxSpinnerService
  ) {}

  checkStatusSuccessResponse(status: number): void {
    this.spineer.hide();

    if (status !== 200) {
      this.toastr.error("We can not get Data Right Now !");
    } else {
      return
    }

  }
}
