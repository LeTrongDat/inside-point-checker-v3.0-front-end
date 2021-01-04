import { Injectable } from '@angular/core';
import {Result} from '../models/result';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResultServiceService {
  getUrl = '/result';
  clearUrl = '/clear';

  constructor(private http: HttpClient) { }
  getResults(): Observable<Result[]> {
    return this.http.get<Result[]>(this.getUrl);
  }
  clear(): Observable<any> {
    return this.http.get(this.clearUrl);
  }
}
