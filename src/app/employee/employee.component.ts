import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../shared/employee.service';
import { MatDialog } from '@angular/material/dialog';
import { SnackBarService } from '../shared/snack-bar.service';
import { DefaultResponseMessage } from '../enumarators/default-response-message';
import { ContentDeletionConfirmationComponent } from '../modals/content-deletion-confirmation/content-deletion-confirmation.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  employees: any[] = [];

  constructor(
    private employeeService: EmployeeService,
    private dialog: MatDialog,
    private snackBarService: SnackBarService
  ) {}

  ngOnInit(): void {
    this.employees = this.employeeService.getAllEmployees();
  }

  deleteEmployee(employeeId: number) {
    this.employeeService.deleteEmployeeById(employeeId);
    this.employees = this.employeeService.getAllEmployees();
    this.snackBarService.successSnackBarDisplay(
      DefaultResponseMessage.OperationCompletedSuccessfully
    );
  }

  confirmEmployeeDeletion(employee: any) {
    const dialogRef = this.dialog.open(ContentDeletionConfirmationComponent, {
      data: { title: employee.fullName },
    });
    dialogRef.afterClosed().subscribe((result) => {
      result ? this.deleteEmployee(employee._id) : '';
    });
  }
}
