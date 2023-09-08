import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
})
export class EmployeeDetailComponent implements OnInit {
  public employees: any = [];

  constructor(private _employeeDetail: EmployeeService) {}

  ngOnInit() {
    this._employeeDetail
      .getEmployee()
      .subscribe((data) => (this.employees = data));
  }
}