import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-afooter',
  templateUrl: './afooter.component.html',
  styleUrls: ['./afooter.component.css']
})
export class AfooterComponent implements OnInit {

  public msg:string='子组件msg';
  constructor() { }

  ngOnInit() {
  }

  run(){
    alert('footer组件方法');
  }
}
