import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewchildNew',
  templateUrl: './viewchildNew.component.html',
  styleUrls: ['./viewchildNew.component.css']
})
export class ViewchildNewComponent implements OnInit {

  //获取dom节点
  @ViewChild('mybox') mybox:any;

  //调用子组件的dom节点
  @ViewChild('header') header:any;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit():void{
    console.log(this.mybox.nativeElement);
    this.mybox.nativeElement.style.color="red";

    //调用子组件的方法
    this.header.run();
  }
}
