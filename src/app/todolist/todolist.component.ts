import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  public keywords:any;

  public todolist:any[]=[];

  constructor() { }

  ngOnInit() {
  }

  doadd(e){
    if(e.keyCode==13) {
      if(!this.dodolisthaskey(this.todolist,this.keywords) && ''!=this.keywords){
        this.todolist.push({
          title:this.keywords,
          status:0
        });
      } else {
        alert("输入不正");
      }
      this.keywords='';
    }
  }
  doover(key){
    this.todolist.splice(key,1);
  }

  dodolisthaskey(todolist,keywords){
// //异步，存在问题
//     todolist.forEach(element => {
//       if(element.title==keywords){
//         return true;
//       }
//     });
//     return false;

    for(var i=0;i<todolist.length;i++){
      if(todolist[i].title==keywords){
        return true;
      }
    }
    return false;
  }
}
