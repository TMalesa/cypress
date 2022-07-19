import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { SnackBarService } from '../../shared/snack-bar.service';
import { DefaultResponseMessage } from '../../enumarators/default-response-message';
import {EmployeeService  } from '../../shared/employee.service';

@Component({
  selector: 'app-employee-creator',
  templateUrl: './employee-creator.component.html',
  styleUrls: ['./employee-creator.component.css']
})
export class EmployeeCreatorComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private matDialogRef: MatDialogRef<EmployeeCreatorComponent>,
    private router: Router,
    private snackbarService: SnackBarService
  ) {}

  superPowers: any[] = [];

  ngOnInit(): void {
    this.superPowers = this.employeeService.getAllEmployees();
  }
  departments = [
    { id: 1, value: 'Finance' },
    { id: 2, value: 'IT' },
    { id: 3, value: 'Cleaning' },
    { id: 4, value: 'Other' },
  ];

  employeeForm = this.fb.group({
    _id: [
      this.employeeService.generateEmployee(),
      [Validators.required],
    ],
    fullName: ['', [Validators.required]],
    surname: ['', [Validators.required]],
     email: ['', [Validators.required, Validators.email]],
    abNumber: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    departments: ['', [Validators.required]],
    
  });

  createEmployee() {
    this.employeeService.createEmployee(this.employeeForm.value);
    this.matDialogRef.close();
    this.router.navigate(['/employees-display']);
    this.snackbarService.successSnackBarDisplay(
      DefaultResponseMessage.OperationCompletedSuccessfully
    );
  }
}
