import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { LoginDataDTO } from './model';
import { LoginServiceService } from './login-service.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

username :LoginDataDTO;


  /* constructor() { } */   

  
 /*  signin= new FormGroup({

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
 */

 /* ----------------Using Services------------------------------------------------------------------------------ */

 promiseUsers: LoginDataDTO[] = [];


 constructor(private loginservice: LoginServiceService,private router:Router) {}
 ngOnInit(){
}

 login(username: LoginDataDTO) {    
  this.loginservice.send(username);
  if(username){
    console.log(username)
    this.router.navigate(['/homepage']);
  }
}

}