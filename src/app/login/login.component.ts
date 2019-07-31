import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error : string = "";

  onSubmit(f : NgForm){
    console.log(f);
  }

  onInput(f : NgForm){
    if(f.value.username.length<=0){
      this.error  = "Something went wrong with username."
    }
    else{
      this.error = "";
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
