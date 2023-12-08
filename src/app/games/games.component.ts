import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [GamesComponent],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  @Input() username: string = '';

  // Hay que inicializar el objeto que va enviar la información al padre
  @Output() addFavouriteEvent = new EventEmitter<string>();
  
  games = [
    {
      id: 1,
      name: 'Uncharted 4'
    },
    {
      id: 2,
      name: 'Horizon Zero Dawn'
    },
    {
      id:3,
      name: 'Bloodborne'
    }
  ]

  fav(gameName: string){
    this.addFavouriteEvent.emit(gameName)
  }
}
