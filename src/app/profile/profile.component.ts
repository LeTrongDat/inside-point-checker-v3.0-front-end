import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  time: string;
  constructor() {
    this.time = new Date().toLocaleString();
  }

  ngOnInit(): void {
    setInterval(() => {
      this.time = new Date().toLocaleString();
    }, 1000);
  }
}
