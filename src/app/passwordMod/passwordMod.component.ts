import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { passwordMod } from './passwordMod';

@Component({
  selector: 'app-passwordMod',
  templateUrl: './passwordMod.component.html',
  styleUrls: ['./passwordMod.component.css']
})
export class PasswordModComponent implements OnInit {

  public userList:any=['','张三','李四','王五','赵柳','田七'];

  // passwordModForm:any;

  passwordMod = new passwordMod();

  constructor() { }

  ngOnInit() {
  }

  clearButton(){

    alert("clear");
  }

  onSubmit(){
    console.log(this.passwordMod.name);
  }
}
