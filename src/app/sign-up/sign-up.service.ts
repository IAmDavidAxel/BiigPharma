import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

const endPoint = 'http://localhost:8080/api/client/';
const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods' : 'GET,POST,DELETE,PUT',
    'Access-Control-Allow-Headers': '*',
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private httpClient: HttpClient) { }

  createAccount(signUpForm): Observable<any> {
    return this.httpClient.post<any>(endPoint + 'create', signUpForm, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((signUpForm) => console.log('account created'))
    );
  }
}
