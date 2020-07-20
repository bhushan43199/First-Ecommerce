import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  signin= new FormGroup({

    username:new FormControl('', Validators.required),
    password: new FormControl('')

  })

  collectData()
  {
    console.log(this.signin.value)
    alert('User Signed in');

  }

  get email(){return this.signin.get('email')}

}
