import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Router} from '@angular/router';
import {Game} from "./../../shared/game.model";



@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.scss']
})
export class AddGameComponent implements OnInit {

  games: Object;
  game: Game;
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
      this.game = new Game().deserialize(data);
      console.log(this.game)

      var myElement = document.getElementById('gameAdded');
      myElement.innerText = "You have added a game to your account : " + this.game.name;

      var imageElement = document.getElementById('image');
      imageElement.innerHTML = "<img height='300' width='400' src='" + this.game.image + "'>";
    })
  }

  
}
