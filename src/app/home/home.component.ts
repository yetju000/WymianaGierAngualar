import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  games: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getWall().subscribe(data => {
      this.games = data
      console.log(this.games)
    })
  }

}
