import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {

  loggedIn: boolean = null;

  appTitle: string = 'Game Exchange';

  reloaded: boolean = false;

  constructor() {
    
   }

  
  ngOnInit() {
    this.loggedIn = this.isLoggedIn();
    console.log(this.loggedIn);
  }

  isLoggedIn(){
    if (localStorage.getItem('loggedIn') == 'true'){return true;}
    return false;
  }
  

}
