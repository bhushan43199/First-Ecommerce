import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/Shared Components/signin/login-service.service';
import { LoginDataDTO } from '../signin/model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

/*   constructor() { }

  ngOnInit(): void {
  }
 */
  User: LoginDataDTO[] = [];

  constructor(private loginservice: LoginServiceService) { }

  ngOnInit() {
   this.getUsersWithPromise()
  }

    getUsersWithPromise() {
      this.loginservice.getUsersForPromise()
        .toPromise()  
        .then(res => {
          this.User = res["username"]; 
        })
      .catch (err => {
        console.log("Error" + err);
        
      });
    }
}
