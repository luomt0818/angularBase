import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  picUrl='https://www.baidu.com/img/bd_logo1.png?where=super'

  public arr:any[]=['aaaaa','22222','33333','44444'];

  public orderStatus:number=3;

  public flag:any=false;

  public today:Date=new Date();

  public title:any="tile...........";

  public keywords:any;

  constructor() { }

  ngOnInit() {
  }

  run(){
    alert("触发成功")
  }

  getData(){
    alert(this.title);
  }

  setData(){
    this.title="设定title";
  }

  keyDown(e){
    //回车code判断
    if(e.keyCode==13){
      console.log("回车");
    } else{
      console.log(e.target.value);
    }
  }

  changkeywords(){
    this.keywords='改变的值';
  }

  getkeywords(){
    console.log(this.keywords);
  }
}
