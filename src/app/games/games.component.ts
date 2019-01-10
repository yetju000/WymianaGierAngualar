import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  games: Object;
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

    this.data.getGamesForUserId(1).subscribe(data => {
      this.games = data
      console.log(this.games)
    })
  }

  isLoggedIn(){
    if (localStorage.getItem('loggedIn') == 'true'){return true;}
    return false;
  }

}
