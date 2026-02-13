import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Container } from '../../container/container';
import { Cabecalho } from '../../cabecalho/cabecalho';
import { Separador } from '../../separador/separador';
import { Contato } from '../../contato/contato';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfil-contato',
  imports: [RouterLink, Container, Cabecalho, Separador, Contato, FormsModule, CommonModule],
  templateUrl: './perfil-contato.html',
  styleUrl: './perfil-contato.css',
})
export class PerfilContato {

}
