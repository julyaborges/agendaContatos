import { Component, OnInit } from '@angular/core';
import { Container } from '../../container/container';
import { Separador } from '../../separador/separador';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ContatoService } from '../../../services/contato-service';
//import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-formulario-contato',
  imports: [ Container, Separador, ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './formulario-contato.html',
  styleUrl: './formulario-contato.css',
})
export class FormularioContato implements OnInit {

  contatoForm!: FormGroup;

  constructor(private contatoService: ContatoService, private router: Router){

  }

  ngOnInit(){
    this.inicializarFormulario();
  }

  inicializarFormulario(){
    this.contatoForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      aniversario: new FormControl(''),
      redes: new FormControl(''),
      observacoes: new FormControl(''),
    });
  }

  salvarContato(){
    const novoContato = this.contatoForm.value;
    this.contatoService.salvarContatos(novoContato);

    this.contatoForm.reset();
    this.router.navigateByUrl('/lista-contatos');
  }

  cancelar(){
    this.contatoForm.reset();
  }
}
