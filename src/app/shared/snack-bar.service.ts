import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private snackBarService: MatSnackBar) { }

  successSnackBarDisplay(message: string) {
    this.snackBarService.open(message, ``,{
      verticalPosition:'top',
      horizontalPosition:'right',
      panelClass:'snack-bar-success-container',
      duration:2000,
    })
  }

  errorSnackBarDisplay(message: string) {
    this.snackBarService.open(message, ``,{
      verticalPosition:'top',
      horizontalPosition:'right',
      panelClass:'snack-bar-error-container',
      duration:2000,
    })
  }
}
