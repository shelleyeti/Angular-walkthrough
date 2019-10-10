import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId = 10;
  serverStatus = 'offline';
  addNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = '';
  serverCreated = false;

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit() {
  }

  getServerStatus() {
    return this.serverStatus;
  }
  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = `Server was created! Called ${this.serverName}`;
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
