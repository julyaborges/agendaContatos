import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-separador',
  imports: [ CommonModule],
  templateUrl: './separador.html',
  styleUrl: './separador.css',
})
export class Separador {

   @Input() tipo: string = '';

}
