import { Component } from '@angular/core';
import { Container } from '../../container/container';
import { Separador } from '../../separador/separador';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-novo',
  imports: [Container, Separador, CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login-novo.html',
  styleUrl: './login-novo.css',
})
export class LoginNovo {

  loginForm!: FormGroup;
  showPassword = false;

  constructor(){
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      senha: new FormControl("", [Validators.required, Validators.minLength(6)]),
      remember: new FormControl(true)
    });
  }

  login(){
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
      return;
    }

    const {email, senha, remember} = this.loginForm.value;

    if (remember){
      localStorage.setItem('rememberEmail', email);
    }else {
      localStorage.removeItem('rememberEmail')
    }
  }

  ngOnInit(){
    const remembered = localStorage.getItem('rememberEmail');
    if (remembered){
      this.loginForm.patchValue({
        email: remembered, remember:true
      })
    }
  }

}
