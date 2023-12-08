import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',                   // esto es el nombre del componente
  standalone: true,
  imports: [CommonModule, RouterOutlet, UserComponent],   // hay que agregar el nombre del selector para utilizar un componente
  templateUrl: './app.component.html',    // esto es lo que renderiza
  styleUrl: './app.component.css'         // Se pueden escribir aqui mismo los estilos, html, etc.
})
export class AppComponent {
  city = 'Manzanillo'
}
