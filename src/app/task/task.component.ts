import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor() { }

  displaySecret = false;
  collection = [];

  updateData() {
   this.displaySecret = !this.displaySecret;
  this.collection.push(new Date());
  }

  ngOnInit() {
  }

}
