import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-exchanges',
  templateUrl: './exchanges.component.html',
  styleUrls: ['./exchanges.component.scss']
})
export class ExchangesComponent implements OnInit {

  router: Router;
  loggedIn : boolean = false;

  constructor(private data: DataService, _router: Router) { 
    this.router = _router;
  }

  ngOnInit() {
    this.loggedIn = this.isLoggedIn();
    console.log(this.loggedIn);
    if (!this.loggedIn)
      this.router.navigateByUrl('/login');
/*
    this.data.getFriends().subscribe(data => {
      this.users = data
      console.log(this.users)
    })*/
  }

  isLoggedIn(){
    if (localStorage.getItem('loggedIn') == 'true'){return true;}
    return false;
  }

}
