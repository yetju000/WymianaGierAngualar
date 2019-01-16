import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Game} from "./../../shared/game.model";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  games: Object;

  exchange(id: number) {
    this.data.postGame(id,1).subscribe(data => {
    })
  }

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getWall().subscribe(data => {
      this.games = data
      console.log(this.games)
    })
  }

}
