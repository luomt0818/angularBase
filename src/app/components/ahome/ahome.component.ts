import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ahome',
  templateUrl: './ahome.component.html',
  styleUrls: ['./ahome.component.css']
})
export class AhomeComponent implements OnInit {

  public title:any="首页组件的标题";

  public msg:any="首页msg";
  constructor() { }

  ngOnInit() {
  }
  

  run(){
    alert("父组件方法");
  }
}
