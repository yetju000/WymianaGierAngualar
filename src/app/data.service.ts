import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getFriends() {
    return this.http.get('http://gameexchange.getsandbox.com/friends')
  }

  getWall() {
    return this.http.get('http://gameexchange.getsandbox.com/wall')
  }

  getGamesForUserId(id : number) {
    return this.http.get('http://gameexchange.getsandbox.com/games/users/' + id)
  }

  getGames() {
    return this.http.get('http://gameexchange.getsandbox.com/games')
  }
}
