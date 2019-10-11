import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  username = '';
  usernameCreationStatus = 'No user was created';
  showSecret = false;
  logClick = [];

  constructor() { }

  ngOnInit() {
  }

  onCreateUsername() {
    this.usernameCreationStatus = `User was created! Called ${this.username}`;
    this.username = '';
  }

  onToggleDisplay() {
    this.showSecret = !this.showSecret;
    this.logClick.push(this.logClick.length + 1);
  }
}
