import { Component, OnInit } from '@angular/core';
import { Container } from '../../container/container';
import { Cabecalho } from '../../cabecalho/cabecalho';
import { Separador } from '../../separador/separador';
import { Contato } from '../../contato/contato';
import { FormsModule } from '@angular/forms';
import { FormularioContato } from '../formulario-contato/formulario-contato';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContatoService } from '../../../services/contato-service';
import { ContatoInterface } from '../../contato/contato-interface';

@Component({
  selector: 'app-lista-contatos',
  imports: [CommonModule, Container, Cabecalho, Separador, Contato, FormsModule, FormularioContato, RouterLink],
  templateUrl: './lista-contatos.html',
  styleUrl: './lista-contatos.css',
})
export class ListaContatos implements OnInit {

   alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';

  contatos: ContatoInterface[] = [];

  filtroPorTexto: string = '';

  constructor(private contatoService: ContatoService){

  }

  ngOnInit(){
      this.contatos = this.contatoService.obterContatos();
  }


  filtrarContatosPorLetraInicial(letra:string): ContatoInterface[]{
    return this.filtrarContatosPorTexto().filter( contato => {
      return contato.nome.toLowerCase().startsWith(letra)
    })
  }

  filtrarContatosPorTexto(): ContatoInterface[] {
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
