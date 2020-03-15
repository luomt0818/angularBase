import { Component, OnInit } from '@angular/core';
// import { AsyncValidator, FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FormBuilder,FormControl,FormGroup  } from '@angular/forms';
import { UserInfo } from '../userInfo';


@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  checkoutForm;
  // checkoutForm = new FormGroup({
  //   name: new FormControl(null, [Validators.required]),
  //   pass: new FormControl(null, [Validators.required]),
  //   passAgain: new FormControl(null, [Validators.required]),
  // });
  // 
  // userInfo: UserInfo = {
  //   id: '123456',
  //   name: '张三',
  //   pass: '123456789',
  //   passAgain: '12345678'
  // }

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.checkoutForm = new FormGroup({
    name: new FormControl(),
    pass: new FormControl(),
    passAgain: new FormControl(),
    });
  }

  ngOnInit(): void {
  }

  public handleInitForm(): void {
    this.checkoutForm.reset();
  }

  clearButton() {
    alert("clearButton");
  }

  confirmButton(){
    alert("confirmButton");
  }

  onSubmit() {
    // Process checkout data here
    console.log('Your order has been submitted', this.checkoutForm.value);

    //this.checkoutForm.reset();
  }
}
