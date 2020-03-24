import { Component, OnInit } from '@angular/core';
// import { AsyncValidator, FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FormBuilder,FormControl,FormGroup,Validators  } from '@angular/forms';
import { UserInfo } from '../userInfo';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  public userList:any=['','张三','李四','王五','赵柳','田七'];

  // userInfo: UserInfo = {
  //   name: '王五',
  //   pass: 'ddd',
  //   passAgain: 'ddd'
  // }

  userInfo = new UserInfo();

  // checkoutForm;
  // 方式一
  checkoutForm:any = new FormGroup({
    'name': new FormControl(this.userInfo.name,[
                              Validators.required]),
    'pass': new FormControl(this.userInfo.pass, [
                              Validators.required,
                              Validators.minLength(4),
                              Validators.maxLength(10)]),
    'passAgain': new FormControl(this.userInfo.passAgain, [
                              Validators.required,
                              Validators.minLength(4),
                              Validators.maxLength(10)]),
  });
  // 方式二
  // checkoutForm = this.formBuilder.group({
  //   name: [''],
  //   pass: [''],
  //   passAgain: ['']
  // })

  message:any;

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
  }

  get name() { return this.checkoutForm.get('name'); }

  get pass() { return this.checkoutForm.get('pass'); }

  get passAgain() { return this.checkoutForm.get('passAgain'); }

  clearButton() {
    this.checkoutForm.reset();
  }

  onSubmit(checkoutForm:any) {
    // Process checkout data here
 
    // console.log('checkoutForm:', this.checkoutForm.value);
    // console.log('checkoutForm→name:', checkoutForm.name);
    // console.log('checkoutForm→pass:', checkoutForm.pass);
    // console.log('checkoutForm→passAgain:', checkoutForm.passAgain);
    console.log(checkoutForm.name +':'+checkoutForm.pass+':'+checkoutForm.passAgain)

    if (checkoutForm.pass != checkoutForm.passAgain) {
      this.message="密码不一致";
    }
  }
}
