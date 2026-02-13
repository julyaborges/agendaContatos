import { Routes } from '@angular/router';
import { FormularioContato } from './componentes/paginas/formulario-contato/formulario-contato';
import { ListaContatos } from './componentes/paginas/lista-contatos/lista-contatos';
import { Login } from './componentes/paginas/login/login';


export const routes: Routes = [
  {
    path: 'formulario',
    component: FormularioContato
  },
  {
    path: 'lista-contatos',
    component: ListaContatos
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: "",
    redirectTo: '/lista-contatos',
    pathMatch: 'full'
  }


];
