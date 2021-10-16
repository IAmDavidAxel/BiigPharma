/* tslint:disable */
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Pharmacy, PharmacyAdapter} from './model/Pharmacy';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

const endPoint = 'http://localhost:8080/api/';
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

  constructor(private http: HttpClient, private adapter: PharmacyAdapter) { }

  addPharmacy(pharmacyForm): Observable<any> {
    return this.http.post<any> (endPoint + 'pharmacy/create',pharmacyForm,httpOptions).pipe(
      tap((pharmacyForm) => console.log('added pharmacy'))
    );
  }

  findPharmacy(): Observable<Pharmacy[]>{
    return this.http.get<Pharmacy[]> (endPoint + 'pharmacy/findAll',httpOptions).pipe(
      map((data: any) => data.map(item => this.adapter.adapt(item)))
    );
  }
}
