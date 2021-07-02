import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

const endPoint = 'http://127.0.0.1:8080/api/';
const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Request-Headers': '*',
    'Content-Type' : 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class MedsService {

  constructor(private http: HttpClient) { }

  addDrugs(medsForm): Observable<any> {
    return this.http.post<any> (endPoint + 'drugs', medsForm, httpOptions).pipe(
      tap((pharmacyForm) => console.log('added pharmacy'))
    );
  }

  findDrug(medForm): Observable<any>{
    return this.http.get<any>(endPoint + 'drugs',  medForm).pipe();
  }
}
