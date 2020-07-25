import { Injectable } from '@angular/core';
import { BehaviorSubject,  Observable } from "rxjs";
import {LoginDataDTO} from './model';


@Injectable()
export class LoginServiceService {

  constructor() { }

  outputData : any;

  send(userdata: LoginDataDTO){

    this.outputData = new Observable<LoginDataDTO>
    (observer => {        
            observer.next(userdata);
            observer.complete();   
     
    });
  }

   getUsersForPromise():Observable<LoginDataDTO[]>
  {    
    return this.outputData;
  }

}