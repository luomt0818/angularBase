import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-domHome',
  templateUrl: './domHome.component.html',
  styleUrls: ['./domHome.component.css']
})
export class DomHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //试图加载完成后触发的方法  dom加载完成
  ngAfterViewInit():void{
    let box=document.getElementById('box1');
    console.log(box.innerHTML);
    box.style.color="blue";
  }
}
