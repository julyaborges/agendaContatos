import { Component } from '@angular/core';
import { Container } from '../../container/container';
import { Cabecalho } from '../../cabecalho/cabecalho';
import { Separador } from '../../separador/separador';
import { Contato } from '../../contato/contato';
import { FormsModule } from '@angular/forms';
import { FormularioContato } from '../formulario-contato/formulario-contato';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [Container, Cabecalho, Separador, Contato, FormsModule, FormularioContato, CommonModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  
}
