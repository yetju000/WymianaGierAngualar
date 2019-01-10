import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  router: Router;
  loggedIn: boolean;
  constructor(_router: Router) { 
    this.router = _router;
  }

  ngOnInit() {
    this.loggedIn = this.isLoggedIn();
    console.log(this.loggedIn);
    if (!this.loggedIn)
      this.router.navigate(['/login']);
    localStorage.setItem("loggedIn", "false");
    this.router.navigateByUrl('/');
  }

  isLoggedIn(){
    if (localStorage.getItem('loggedIn') == 'true'){return true;}
    return false;
  }

}
