import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username:string;
  Isvisible: any;
  

  constructor() { 
    /* this.username="montu" */
  }

  ngOnInit(): void{
   

  }

  login()
  {
   /*  var display = document.getElementById("test").style.display="inline" */
    if(this.username)
    { 

     this.Isvisible = true;
    /* return true;
 */
    }
    else
    {
     this.Isvisible = false;
    /* return false; */
    }
  }

}
