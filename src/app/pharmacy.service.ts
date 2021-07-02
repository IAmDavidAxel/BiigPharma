/* tslint:disable */
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Pharmacy} from './model/Pharmacy';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

const endPoint = 'http://172.20.10.13:8080/api/';
const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods' :'GET,POST,DELETE,PUT',
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class PharmacyService {

  public pharmacy: Pharmacy;

  constructor(private http: HttpClient) { }

  addPharmacy(pharmacyForm): Observable<any> {
    return this.http.post<any> (endPoint + 'pharmacy',pharmacyForm,httpOptions).pipe(
      tap((pharmacyForm) => console.log('added pharmacy'))
    );
  }

  findPharmacy(): Observable<any>{
    return this.http.get<any> (endPoint + 'findAll',httpOptions).pipe(
      tap( () => console.log('this is all the pharmacy open near you'))
    );
  }
}
