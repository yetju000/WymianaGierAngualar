import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.scss']
})
export class AddGameComponent implements OnInit {

  games: Object;
  game: Object;
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

    this.data.getGames().subscribe(data => {
      this.games = data
      console.log(this.games)
    })
    
  }

  isLoggedIn(){
    if (localStorage.getItem('loggedIn') == 'true'){return true;}
    return false;
  }

  addGame(id: number) {
    this.data.postGame(id,1).subscribe(data => {
      this.game = data
      console.log(this.game)
      
    })
  }

  
}
