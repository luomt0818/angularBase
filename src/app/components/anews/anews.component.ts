import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-anews',
  templateUrl: './anews.component.html',
  styleUrls: ['./anews.component.css']
})
export class AnewsComponent implements OnInit {

  @ViewChild("footer") footer:any;
  constructor() { }

  ngOnInit() {
  }

  getparentmsg(){

    alert(this.footer.msg);
  }

  getparentmethod(){
    this.footer.run();
  }
}
