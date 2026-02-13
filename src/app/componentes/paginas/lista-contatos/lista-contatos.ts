import { Component } from '@angular/core';
import { Container } from '../../container/container';
import { Cabecalho } from '../../cabecalho/cabecalho';
import { Separador } from '../../separador/separador';
import { Contato } from '../../contato/contato';
import { FormsModule } from '@angular/forms';
import { FormularioContato } from '../formulario-contato/formulario-contato';
import { CommonModule } from '@angular/common';


// representar nossos contatos
interface IContato{
  id: Number
  nome: string
  telefone: string
}

import agenda from '../../../agenda.json'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-contatos',
  imports: [CommonModule, Container, Cabecalho, Separador, Contato, FormsModule, FormularioContato, RouterLink],
  templateUrl: './lista-contatos.html',
  styleUrl: './lista-contatos.css',
})
export class ListaContatos {
   alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';

  contatos: IContato[] = agenda;

  filtroPorTexto: string = '';

  filtrarContatosPorLetraInicial(letra:string): IContato[]{
    return this.filtrarContatosPorTexto().filter( contato => {
      return contato.nome.toLowerCase().startsWith(letra)
    })
  }

  filtrarContatosPorTexto(): IContato[] {
    if(!this.filtroPorTexto){
      return this.contatos
    }

    return this.contatos.filter( contato => {
      return this.acentuacao(contato.nome).includes(this.acentuacao(this.filtroPorTexto))
      //return contato.nome.toLowerCase().includes(this.filtroPorTexto.toLowerCase())
  })
}

  acentuacao(filtroPorTexto: string): string {
  return filtroPorTexto
    .normalize('NFD') // Separa a letra do acento
    .replace(/[\u0300-\u036f]/g, '') // Remove os acentos da string
    .toLowerCase(); // Converte tudo para minúsculo
}
}
