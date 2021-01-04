import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../../services/user-service.service';
import {Message} from 'primeng/api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  msgs: Message[];
  constructor(private userService: UserServiceService, private router: Router) {
    this.username = '';
    this.password = '';
    this.msgs = [];
  }

  ngOnInit(): void {
  }
  onLogin(): void {
    this.userService.login({username: this.username, password: this.password}).subscribe(
      (mess: any) => {
        this.userService.setLogged(true);
        this.userService.setToken(mess.token);
        this.msgs = [ { severity: 'success', summary: 'Success', detail: 'Login success' }];
        setTimeout(() => this.router.navigate(['/home']), 400);
      },
      () => {
        this.msgs = [ { severity: 'error', summary: 'Error', detail: 'Username or password is invalid'}];
        setTimeout(() => this.msgs = [], 2000);
      }
     );
  }
  onSignUp(): void {
    this.router.navigate(['/register']);
  }
}
