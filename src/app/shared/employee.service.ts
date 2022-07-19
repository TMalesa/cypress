import { Injectable } from '@angular/core';
import { Employee } from '../sample-data/employee-sample-data';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  ArrayOfEmployees = Employee;
  constructor() {}

  createEmployee(employee: any) {
    this.ArrayOfEmployees.push(employee);
  }

  getAllEmployees() {
    return this.ArrayOfEmployees;
  }

  deleteEmployeeById(employeeId: number) {
    this.ArrayOfEmployees = this.ArrayOfEmployees.filter(
      (employee) => employee._id !== employeeId
    );
  }

  generateEmployee(){
    return this.ArrayOfEmployees.length + 1;
  }
}
