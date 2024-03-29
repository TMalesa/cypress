import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-content-deletion-confirmation',
  templateUrl: './content-deletion-confirmation.component.html',
  styleUrls: ['./content-deletion-confirmation.component.css']
})
export class ContentDeletionConfirmationComponent implements OnInit {

  constructor(
    private matDialogRef: MatDialogRef<ContentDeletionConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  name = 'Tshego';

  ngOnInit(): void {}

  closeModal(confirmContentDeletion = false) {
    this.matDialogRef.close(confirmContentDeletion);
  }
}
