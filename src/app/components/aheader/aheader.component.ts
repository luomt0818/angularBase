import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-aheader',
  templateUrl: './aheader.component.html',
  styleUrls: ['./aheader.component.css']
})
export class AheaderComponent implements OnInit {

  //接受父组件传递值
  @Input() title:any;

  @Input() msg:any;

  @Input() run:any;

  //获取整个父组件
  @Input() home:any;

  constructor() { }

  ngOnInit() {
  }

  getparentmsg(){
    //获取父组件数据
    alert(this.msg);
  }

  getparentmethod(){
    //获取父组件方法
    this.run();

    alert(this.home.msg);
    this.home.run();
  }
}
