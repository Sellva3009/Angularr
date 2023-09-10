import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { IEmployee } from './employee';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private _url: string = '../assets/data/employees.json';

  constructor(private http: HttpClient) {}

  getEmployee(): Observable<IEmployee> {
    // return [
    //   { id: 1, name: 'Kohli', age: 33 },
    //   { id: 2, name: 'Dhoni', age: 37 },
    //   { id: 3, name: 'Rohit', age: 34 },
    //   { id: 4, name: 'Dhawan', age: 36 },
    // ];
    return this.http
      .get<IEmployee>(this._url)
      .pipe(
      catchError((error: any) => {
        console.error('Error:', error);
        return throwError(error);
      })
      );
  }

  // private errorHandler(error: any): Observable<never> {
  //   console.error('Error:', error);
  //   return throwError(error);
  // }
}
