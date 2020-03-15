import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public keywords:string;
  public historyList:any[]=[];

  constructor(public stroge:StorageService) {
    //let s=this.stroge.get();
    //console.log(s);
   }

  ngOnInit() {

    var list = this.stroge.get('searchlist');
    if(list){
      this.historyList=list;
    }
    
  }

  dosearch(){
    if(this.historyList.indexOf(this.keywords)==-1 && '' != this.keywords){
      this.historyList.push(this.keywords);
      this.stroge.set('searchlist',this.historyList);
    }
    this.keywords="";
    console.log(this.keywords);
  }

  delete(key){
    this.historyList.splice(key,1);
    this.stroge.set('searchlist',this.historyList);
  }

}
