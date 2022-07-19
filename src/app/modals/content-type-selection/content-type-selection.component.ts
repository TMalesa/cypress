import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EmployeeCreatorComponent } from '../employee-creator/employee-creator.component';

@Component({
  selector: 'app-content-type-selection',
  templateUrl: './content-type-selection.component.html',
  styleUrls: ['./content-type-selection.component.css']
})
export class ContentTypeSelectionComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private matDialogRef: MatDialogRef<ContentTypeSelectionComponent>
  ) {}

  ngOnInit(): void {}

  contentCreationSelection(contentType: string) {
    contentType === 'Employee'
      ? this.openEmployeeCreationModal()
       : this.openEmployeeCreationModal();
  }

  openEmployeeCreationModal() {
    this.dialog.open(EmployeeCreatorComponent,{width:'20%'});

    this.matDialogRef.close();
  }
}
