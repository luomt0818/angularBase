import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { sharedStylesheetJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent implements OnInit {

  @Output() public outer=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  sendparent(){
    this.outer.emit('子组件数据');
  }
}
