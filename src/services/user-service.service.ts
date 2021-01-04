import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {CanActivate, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService implements CanActivate {
  isLoggedIn: boolean;
  registerUrl: string;
  loginUrl: string;
  token: string;
  constructor(private http: HttpClient, private router: Router) {
    this.isLoggedIn = false;
    this.token = '';
    this.registerUrl = '/register';
    this.loginUrl = '/authenticate';
  }
  register(user: User): Observable<any> {
    return this.http.post<any>(this.registerUrl, user);
  }
  login(user: User): Observable<any> {
    return this.http.post<any>(this.loginUrl, user);
  }
  canActivate(): any {
    // return true;
    if (this.isLogged()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
  isLogged(): boolean {
    return this.isLoggedIn;
  }
  setLogged(logged: boolean): void {
    this.isLoggedIn = logged;
  }
  setToken(token: string): void {
    this.token = token;
  }
  getToken(): string {
    return this.token;
  }
}
