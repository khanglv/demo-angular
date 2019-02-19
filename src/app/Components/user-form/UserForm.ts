import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'UserFormComponent',
  templateUrl: './UserForm.html',
  styleUrls: ['./UserForm.css']
})
export class UserFormComponent implements OnInit {
  name:string = '';
  placeholder:string = '';
  isMetric:boolean = true;
  constructor() { }

  ngOnInit() {
    this.placeholder = "hahaha";
    this.isMetric = false;
  }

}
