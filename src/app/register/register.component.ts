import { Component, OnInit } from '@angular/core';
import {Message} from 'primeng/api';
import {UserServiceService} from '../../services/user-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
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
  onRegister(): void {
    this.userService.register({username: this.username, password: this.password})
      .subscribe(
        (mess: any) => {
          this.msgs = [ { severity: 'success', summary: 'Success', detail: 'Sign up success' }];
          setTimeout(() => this.router.navigate(['/login']), 400);
        },
        () => {
          this.msgs = [ { severity: 'error', summary: 'Error', detail: 'Username or password is invalid'}];
          setTimeout(() => this.msgs = [], 2000);
        }
      );
  }
}
