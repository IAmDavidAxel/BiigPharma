import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserLoggedIn: boolean =false;

  login(username: string, password: string): Observable<any>{
    console.log(username);
    console.log(password);

    this.isUserLoggedIn  = username === 'admin' && password === 'admin';
    localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? 'true' : 'false');

    return of(this.isUserLoggedIn).pipe(
      delay(1000),
      tap(val => {
        console.log('Is User Auth is successful');
      })
    );
  }

  logout(): void{
    this.isUserLoggedIn = false;
    localStorage.removeItem('isUserLoggedIn');
  }


  constructor() { }
}
