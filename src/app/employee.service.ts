import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployee() {
    return [
      { id: 1, name: 'Kohli', age: 33 },
      { id: 2, name: 'Dhoni', age: 37 },
      { id: 3, name: 'Rohit', age: 34 },
      { id: 4, name: 'Dhawan', age: 36 },
    ];
  }
}
