import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-servers', // as an element
 // selector: '[app-servers]', // as an attribut
 // selector: '.app-servers', // as class
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})


export class ServersComponent implements OnInit {

  allowServers = false;
  serverName = 'Testserver';
  userName = '';
  serverCreationStatus = 'No server was created';
  serverDisplay = false;
  servers = ['testServer', 'testServer2'];

  constructor() {
    setTimeout(() => {
      this.allowServers = true;
    }, 2000);
  }

  createServer () {
    this.serverDisplay = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created ' + this.serverName;
  }

  updateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit() {
  }

}
