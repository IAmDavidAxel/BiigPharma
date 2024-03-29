import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

const endPoint = 'http://localhost:8080/api/drug/';
const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods' : 'GET,POST,DELETE,PUT',
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class MedsService {

  constructor(private http: HttpClient) { }

  addDrugs(medsForm): Observable<any> {
    return this.http.post<any> (endPoint + 'create', medsForm, httpOptions).pipe(
      tap((medForm) => console.log('added drug'))
    );
  }

  findDrug(medForm): Observable<any>{
    return this.http.get<any>(endPoint + 'drugs',  medForm).pipe();
  }
}
