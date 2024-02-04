import { Component } from '@angular/core';

@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.scss'],
  template: '<p class="mensaje">Valor por defecto</p>'
})
export class GreetingsComponent {
  mensaje: string = 'Valor por defecto';  
}
