import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { IEmployee } from './IEmployee';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: IEmployee[];

  // tslint:disable-next-line: variable-name
  constructor(private _employeeService: EmployeeService,
              // tslint:disable-next-line: variable-name
              private _router: Router) { }

  ngOnInit() {
    this._employeeService.getEmployees().subscribe(
      (employeeList) => this.employees = employeeList,
      (err) => console.log(err)
    );
  }

  editButtonClick(employeeId: number) {
    this._router.navigate(['/employees/edit', employeeId]);
  }

}
