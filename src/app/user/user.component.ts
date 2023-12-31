import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [UserComponent, GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username = 'Christofer';
  isLoggedIn = false;
  favGame = '';

  getFavourite(gameName:string){
    this.favGame = gameName;
  }

  greet(){
    alert('hola!!');
  }
}
