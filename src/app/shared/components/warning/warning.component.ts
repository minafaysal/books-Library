import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.scss'],
})
export class WarningComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<WarningComponent>
  ) {}
  confirm(): void {
    this.dialogRef.close({
      ...this.data,
      submitted: true,
    });
  }
  confirmCancel(): void {
  this.dialogRef.close({
    ...this.data,
    submitted: false,
  });}
}
