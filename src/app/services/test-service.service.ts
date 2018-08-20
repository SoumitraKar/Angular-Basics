import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError as observableThrowError} from 'rxjs'
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http'

import { Details } from '../interface/details'

@Injectable({
  providedIn : "root"
})
export class TestServiceService {

  private _url:string = "../../../assets/details.json"
  constructor(private http: HttpClient) {  }

  getDetails():Observable<Details[]> {
    return this.http.get<Details[]>('https://jsonplaceholder.typicode.com/users').pipe(catchError(this.errorHandler));
  }
  getErrorToHandle():Observable<Details[]> {
    return this.http.get<Details[]>('localhost:9898/xyz').pipe(catchError(this.errorHandler))
  }
  errorHandler (error:HttpErrorResponse) {
    console.log(error);
    return observableThrowError(error.message || "Server Error")
    // throw(error.message || "Server Error")
  }
}
// src\app\assets\details.json
