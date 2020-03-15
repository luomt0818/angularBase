import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

constructor() { }

/*
组件可以调用服务
服务可以调用服务
组件不可以调用组件（但是父子组件之间可以传值）
服务不可以调用组件
*/
set(key:any,value:any){
  localStorage.setItem(key,JSON.stringify(value));
}

get(key){
  return JSON.parse(localStorage.getItem(key));
}

remove(key){
  localStorage.removeItem(key);
}
}
