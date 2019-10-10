import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  username = '';
  usernameCreationStatus = 'No user was created';

  constructor() { }

  ngOnInit() {
  }

  onCreateUsername() {
    this.usernameCreationStatus = `User was created! Called ${this.username}`;
    this.username = '';
  }
}
