import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Query} from '../models/query';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueryServiceService {
  postUrl = '/query';
  headers = { 'Content-Type': 'application/json'};
  constructor(private http: HttpClient) { }

  update(query: Query): Observable<Query> {
    return this.http.post<Query>(this.postUrl, JSON.stringify(query), { headers: this.headers });
  }
}
