import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {UserServiceService} from '../../services/user-service.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  items: MenuItem[];
  constructor(private userService: UserServiceService) {
    this.items = [];
  }

  ngOnInit(): void {
    this.items = [
      { label: 'About', icon: 'pi pi-user' },
      { label: 'Task', icon: 'pi pi-list' }
    ];
  }
  signOut(): void {
    this.userService.setLogged(false);
    this.userService.setToken('');
  }
}
