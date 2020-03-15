import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
//变量定义
  public student:any='变量定义格式'
  public title:any='显示说明'
  public content:any='<h1>动态加载html</h1>'
  public message:any;
//数组定义
arr1=['11111','22222','33333','44444'];
public arr2:any[]=['aaaaa','22222','33333','44444'];
public arr3:Array<string>=['bbbbb','22222','33333','44444'];

public arr4:any[]=[{
  username:'张三',
  age:20,
  hobby:[
    {
      hobbyname:'篮球',
      hobbyyear:'10年'
    },
    {
      hobbyname:'乒乓球',
      hobbyyear:'6年'
    },
  ]
},{
  username:'李四',
  age:20,
  hobby:[
    {
      hobbyname:'橄榄球',
      hobbyyear:'10年'
    },
    {
      hobbyname:'乒乓球',
      hobbyyear:'6年'
    },
  ]
},{
  username:'王五',
  age:20,
  hobby:[
    {
      hobbyname:'排球',
      hobbyyear:'10年'
    },
    {
      hobbyname:'棒球',
      hobbyyear:'6年'
    },
  ]
},{
  username:'赵六',
  age:20,
  hobby:[
    {
      hobbyname:'足球',
      hobbyyear:'10年'
    },
    {
      hobbyname:'篮球',
      hobbyyear:'6年'
    },
  ]
}];

  constructor() { 
    this.message='改变变量值';
    console.log(this.message);
    this.message='改变后message值。。。。。。。。。。。。。';
    console.log(this.message);
  }

  ngOnInit() {
  }

}
