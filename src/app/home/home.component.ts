import { Component, OnInit } from '@angular/core';
import { ModalService } from '../_services';
import { DataService } from '../data.service';
import {Game} from "./../../shared/game.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  games: Object;
  game: Game;
  private bodyText: string;

  constructor(private data: DataService,private modalService: ModalService) { }
  exchange(id: number) {
    
    this.data.exchangeGame(id).subscribe(data => {
      this.game = new Game().deserialize(data);
      this.bodyText = "You have succesfully exchanged a game! Now, " + this.game.name + " is in your collection.";
    })
    this.openModal('custom-modal-1');
  }


  ngOnInit() {
    this.bodyText = 'This text can be updated in modal 1';
    this.data.getWall().subscribe(data => {
      this.games = data
      console.log(this.games)
    })
  }

  openModal(id: string) {
    this.modalService.open(id);
}

closeModal(id: string) {
    this.modalService.close(id);
}

}
